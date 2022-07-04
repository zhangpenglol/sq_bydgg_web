/**
 * mixin(混入)定义：在不同的组件中经常会需要用到一些相同或者相似的代码，
 * 这些代码的功能相对独立,我们可以通过Vue的mixin功能将相同或者相似的代码提出，
 * 这样一来即方便了代码的复用也使得维护更加容易。
 * 
 * 优先级:
 * 1、data中的属性在键值发生冲突的时候，会以组件中的数据优先
 * 2、同名钩子函数将被合并为一个数组，会依次调用，混合对象的钩子函数将在组件滋生钩子函数之前调用
 * 3、值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突的时候，组件对象的键值优先。
 */
export default {
    data() {
        return {
            msg: "这是mixin的数据",
            mixinMsg: "这是mixin的数据",
        }
    },
    created() {
        console.log('mixin中的created')
    },
    methods: {
        onClick() {
            console.log('触发了mixin中的onClick')
        }
    }
}