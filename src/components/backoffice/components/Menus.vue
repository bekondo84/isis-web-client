<template>
    <section class="ext-menu">
            <div class="ext-menu-search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </div>            
            <menu>
               <ul>
                   <li><a href="">Dashbord</a></li>
                   <li>
                       <a href=""><i class="bi bi-plus-lg"></i>System</a>                      
                       <ul>
                           <li><a href="">Types</a></li>
                           <li><a href="">Menu 2</a></li>
                           <li>
                               Background Process
                               <ul>
                                  <li><a href="">Memu 1</a></li>
                                  <li><a href="">Memu 2</a></li>
                               </ul>
                           </li>
                       </ul>
                   </li>
                   <li>
                    System
                    <ul>
                        <li><a href="">Types</a></li>
                        <li><a href="">Menu 2</a></li>
                        <li>
                            Background Process
                            <ul>
                               <li><a href="">Memu 1</a></li>
                               <li><a href="">Memu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    System
                    <ul>
                        <li><a href="">Types</a></li>
                        <li><a href="">Menu 2</a></li>
                        <li>
                            Background Process
                            <ul>
                               <li><a href="">Memu 1</a></li>
                               <li><a href="">Memu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    System
                    <ul>
                        <li><a href="">Types</a></li>
                        <li><a href="">Menu 2</a></li>
                        <li>
                            Background Process
                            <ul>
                               <li><a href="">Memu 1</a></li>
                               <li><a href="">Memu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    System
                    <ul>
                        <li><a href="">Types</a></li>
                        <li><a href="">Menu 2</a></li>
                        <li>
                            Background Process
                            <ul>
                               <li><a href="">Memu 1</a></li>
                               <li><a href="">Memu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
               </ul>
            </menu>
            <footer>
                Page Footer
            </footer>
        </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .ext-menu
    {
        width: 300px;
        margin: 15px 0px 0px 0px;
    }
    .ext-menu-search
    {
        display: flex;
        flex-flow: row nowrap;
        margin: 0px 0px 0px 0px;
        height: 70px;
        border: ridge;
    }
    .ext-menu-search input
    {
    margin: 15px 0px 0px 0px;
    height: 32px;
    }
   
    ul {
        list-style-type: none;
    }
    menu
    {
        padding: 0px 2px 0px 0px;
        height: 73vh;
        overflow-y: scroll;
        border: thick;
    }
    menu ul
    {
      padding: 0px 0px 0px 23px;
    }
    menu ul ul
    {
        padding: 0px 0px 0px 12px;
    }
    
    footer
    {
        border: 1px solid green;
        height: 5 vh;
    }
</style>