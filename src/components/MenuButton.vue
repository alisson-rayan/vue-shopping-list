<template>
    <div :class="['menu-button', { '-opened': openedMenu }]">
        <transition name="fade">
            <span class="logo" v-show="openedMenu">Shopping List</span>
        </transition>
        <div class="hamburguer" @click="$emit('toggle-menu')">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        openedMenu: Boolean
    }
}
</script>

<style lang="scss">
    .menu-button {
        display: flex;
        align-items: center;
        padding-left: 10px;
        transition: padding 2s;
        height: 100%;

        &.-opened { 
            padding-left: 265px;
            
            & >.hamburguer {
                height: 5px;
                .bar1 {
                    transform: rotate(-45deg) translate(-1px, 1px);
                    -webkit-transform: rotate(-45deg) translate(-1px, 1px);    
                }
                .bar2 { opacity: 0; }
                .bar3 {
                    transform: rotate(45deg) translate(-8px, -8px);
                    -webkit-transform: rotate(45deg) translate(-8px, -8px);
                }
            }
        }

        & >.logo {
            position: absolute;
            left: 15px;
            color: #fff;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 600;
        }
        
        & >.hamburguer {
            outline:none;
            border:0;
            z-index: 10;
            
            &:hover {
                cursor:pointer;
            }
            & > .bar1, .bar2, .bar3 {
                width: 25px;
                height: 3px;
                background-color: #fff;
                margin: 0 0 3px 0;
                transition-duration: 0.4s;
            }  
        }
        & >.side-bar {

        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
        opacity: 0;
    }
</style>
