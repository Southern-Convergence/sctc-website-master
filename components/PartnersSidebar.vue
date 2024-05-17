<template>

    <div class="PSidebar">

            <div class="PContents">

                <p class="text-h7 font-weight-bold"> 
                    <NuxtLink 
                    to="/ServiceCSD" 
                    class="cursor-pointer p-3 text-hover"
                    >DataStax</NuxtLink
                    > 

                </p>

                <br />

                <p class="text-h7 font-weight-bold"> 
                    <NuxtLink 
                    to="/item2" 
                    class="cursor-pointer p-3 text-hover"
                    >Fastly</NuxtLink
                    > 
                
                </p>

                <!--More Partners could be added here if needed-->

            </div>

    </div>

</template>


<style scoped>

    .PSidebar {

        background-color: rgb(255, 255, 255);
        height: 100vh; 
        width:17%;
        padding: 2% 2% 0 2%;
        position: relative;
        float: left;
        overflow-y: hidden;

        border-right-width: 2px;
        border-style: solid;
        border-color: rgb(233, 233, 233);
        
    }

    .PContents {
        
        color: black;
        -webkit-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
        
    }

    @media (max-width: 768px) {

        .PSidebar {
            display: none;
        }

    }

</style>
