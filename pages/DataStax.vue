<template>

    <div class="body">

            <PartnersSidebar />

        <div class="body-main-content" >


                    <div class="HeaderImg"></div>

        

            <div class="body-content text-justify">

                <h5> asdjasdkas </h5>

                
          

            </div>

         


        </div>
     

    </div>

</template>

<style>

    .body {

        display: flex;
        margin: 0px;
        height: 100vh;
        width: 100%;
        color: rgb(255, 255, 255);
        overflow-y: hidden;
        
    }

    .body-main-content {

        position: relative;
        height: 100vh;
        width: 100%;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        
    }

    .HeaderImg {

        background-image: url(/assets/images/datastax.png);
        background-size: cover;
        height: 20%;
        width: auto;
        margin: 1%;
        


    }

    .body-content {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2px;
        margin: auto auto 0% 3%;
        padding: 2% 3% 2% 3%;
        height: 100%;

        background-color: #37373788;
        border-radius: 10px 10px 0px 0px;
        box-shadow: rgba(44, 25, 6, 0.4) 0px 0px 0px 2px, 
                    rgba(44, 30, 6, 0.65) 0px 4px 6px -1px, 
                    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    }
    

   

</style>
