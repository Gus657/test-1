import MdListItemButton from './mdListItemButton.vue';
import MdListItemLink from './mdListItemLink.vue';
import MdListItemRouter from './mdListItemRouter.vue';
import MdListItemExpand from './mdListItemExpand.vue';
import MdListItemDefault from './mdListItemDefault.vue';

const MdListItem = {
  functional: true,
  props: {
    href: String,
    disabled: Boolean
  },
  render(createElement, { children, data, props }) {
    const getItemComponent = () => {
      const on = data.on;
      const interactionEvents = [
        'contextmenu',
        'dblclick',
        'dragend',
        'mousedown',
        'touchstart',
        'click'
      ];
      let childrenCount = children.length;

      if (props.href) {
        return MdListItemLink;
      }

      while (childrenCount--) {
        const options = children[childrenCount].componentOptions;

        if (options) {
          if (options.tag === 'md-list-expand') {
            const expandComponent = children[childrenCount];

            data.scopedSlots = {
              expand: () => expandComponent
            };

            children.splice(childrenCount, 1);

            return MdListItemExpand;
          } else if (options.tag === 'router-link') {
            children[childrenCount].data.staticClass = 'md-list-item-container md-button';

            return MdListItemRouter;
          }
        }
      }

      if (on) {
        let counter = interactionEvents.length;

        while (counter--) {
          if (on[interactionEvents[counter]]) {
            return MdListItemButton;
          }
        }
      }

      return MdListItemDefault;
    };

    return createElement(getItemComponent(), { props, ...data }, children);
  }
};

export default MdListItem;
