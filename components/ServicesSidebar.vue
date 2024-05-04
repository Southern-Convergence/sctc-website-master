<template>

    <div class="Sidebar">

            <div class="SBContents">
                
                <p class="text-h4 font-weight-bold cursor-default"
                    style="margin-top: 38px;
                    "

                >Services</p>

                <v-divider 
                    :thickness="3" 
                    style="margin: 40px 0 0 0;"
                    class="border-opacity-100"
                    color="black"

                    ></v-divider
                >

                <br />

                <p class="text-h6 font-weight-bold"> 
                    <NuxtLink 
                    to="/ServiceCSD" 
                    class="cursor-pointer p-3 text-hover"
                    >Custom Software Development</NuxtLink
                    > 

                </p>

                <br />

                <p class="text-h6 font-weight-bold"> 
                    <NuxtLink 
                    to="/item2" 
                    class="cursor-pointer p-3 text-hover"
                    >Item 2</NuxtLink
                    > 
                
                </p>

                <!--More items/services could be added here if needed-->

            </div>

    </div>

</template>

<style>

    .Sidebar {

        background-color: rgb(255, 255, 255);
        height: 100%;
        width: 20%;
        padding: 2% 2% 0 2%;
        position: fixed;

    }

    .SBContents {

        color: black;
        -webkit-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 

    }

</style>