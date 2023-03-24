import { defineComponent, PropType, toRefs } from 'vue';
import 'uno.css';

export type ISize = 'small' | 'medium' | 'large';
export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<IColor>,
    default: 'blue', // 设定默认颜色
  },
  icon: {
    type: String,
    default: '',
  },
} as const;

export default defineComponent({
  name: 'Button',
  props, // 注册属性
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700  
          border-none 
          cursor-pointer 
          m-1 
        `}
      >
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
