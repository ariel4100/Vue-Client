<template>
    <section>
        <header-partial></header-partial>
        <main>
            <div class="container-fluid">
                <div class="row">
                    <sidebar-partial></sidebar-partial>
                    <div class="col-md-10">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
    import HeaderPartial from '@/partials/HeaderPartial';
    import SidebarPartial from '@/partials/SidebarPartial';
    export default {
        name: 'DefaulLayout',
        components:{
            HeaderPartial,
            SidebarPartial
        }
    }
</script>

<style>

</style>

