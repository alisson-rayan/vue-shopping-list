<template>
    <div class="header">
        <div class="content">
            <menu-button
                :opened-menu="openedMenu"
                @toggle-menu="toggleMenu"
            />
            <transition name="fade">
                <span class="logo" v-show="!openedMenu">Shopping List</span>
            </transition>
            <input class="search" type="text" placeholder="search">
        </div>
        <div :class="['side-bar', { '-opened': openedMenu}]">

        </div>
    </div>
</template>

<script>
import MenuButton from '@/components/MenuButton'

export default {
    components: { MenuButton },
    data () {
        return {
            openedMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.openedMenu = !this.openedMenu
        }
    }
}
</script>

<style lang="scss">
    .header {
        height: 50px;
        background: pink;
        
        & >.content {
            display: flex;
            align-items: center;
            height: inherit;
            
            & >.logo {
                margin-left: 15px;
                color: #fff;
                font-family: 'Courier New', Courier, monospace;
                font-weight: 600;
            }
            & >.search {
                position: absolute;
                right: 15px;
                border: none;
                padding: 8px;
                border-radius: 20px;
                transition: box-shadow 1s;
                
                &::placeholder {
                    font-style: italic;
                    font-weight: 100;
                    color: #ccc;
                }
                &:focus, &:hover {
                    cursor: pointer;
                    outline: none;
                    -webkit-box-shadow: 0px 0px 10px 3px rgba(242,104,210,1);
                    -moz-box-shadow: 0px 0px 10px 3px rgba(242,104,210,1);
                    box-shadow: 0px 0px 10px 3px rgba(242,104,210,1);
                }
            }
        }
        & >.side-bar {
            position: absolute;
            transition: width 2s;
            z-index: 10;
            width: 0;
            background: pink;
            min-height: calc(100vh - 50px);

            &.-opened {
                width: 300px;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
        opacity: 0;
    }
</style>
