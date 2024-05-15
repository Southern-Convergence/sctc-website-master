<template>

    <div class="Service-body">

            <ServicesSidebar />

        <div class="Service-body-maincontent" >


                    <div class="ServiceHeader">


                        <div class="Service-Title">

                            CUSTOM SOFTWARE DEVELOPMENT 

                        </div>

                        <div class="Service-Intro">

                            We specialize in building and optimizing software solutions tailored to unique business and organizational objectives and processes. 
                            Through close collaboration throughout the development process, we ensure continuous alignment with business and operational goals. 
                            Our dedication is focused on delivering exceptional software solutions for every client.

                        </div>


                    </div>

        

            <div class="Service-body-content text-justify">

                <div class="Parag-Number">
                    <p style="margin-bottom: 57%;">01</p> <br />
                    <p style="margin-bottom: 57%;">02</p> <br />
                    <p>03</p> <br />
                </div>

                <div class="Description-Wrapped">

                <div class="BlackRibbon">

                    <p> PROJECTS </p>

                </div>

                <div class="Wrapped-contents">

                <div class="Service-Description text-justify">

                    <p>
                        At our core, we are dedicated to crafting software solutions that are not only tailored to your unique 
                        business needs but also optimized to drive your organization towards its objectives. Our approach begins 
                        with a deep understanding of your business and operational processes, allowing us to design solutions that 
                        seamlessly integrate with your existing workflows and infrastructure.
                    </p>

                    <p>
                        Throughout the development process, we prioritize collaboration and communication, working closely with you 
                        to ensure that every aspect of the software aligns with your goals and objectives. This continuous dialogue 
                        enables us to adapt and refine the solution in real-time, ensuring that it evolves in line with your evolving needs.
                    </p>

                    <p>
                        With our team of experienced professionals by your side, your software needs are in capable hands. Our passion 
                        lies in leveraging technology to drive business success, and we are excited about the opportunity to collaborate 
                        with businesses on their journey towards growth and innovation.
                    </p>

                </div>

                    <div class="Service-Card">

                    </div>

                    <div class="Past-Projects">

                        <v-carousel :show-arrows="false" hide-delimiters cycle>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <div class="text-h2">{{ slide }}</div>
                                <p> {{ Cards[i] }} </p>
                                <p> {{ texts[i] }} </p>
                            </v-carousel-item>
                        </v-carousel>

                    </div>
                    

                </div>

                </div>

              

                
          

            </div>

         


        </div>
     

    </div>

</template>

<script>

  export default {
    data() {
      return {
        slides: 
            [
                'First', 
                'Second', 
                'Third', 
                'Fourth', 
                'Fifth'
            ],
        texts: 
            [
        
                'placeholder 1',
                'placeholder 2',
                'placeholder 3',
                
            ],
        cards : 
            [
                'Card 1',
                'Card 2',
                'Card 3'
            ],
        }
    }
}

</script>

<style>

    .Service-body {

        display: flex;
        margin: 0px;
        height: 100vh;
        width: 100%;
        color: rgb(255, 255, 255);
        overflow-y: hidden;
        
    }

    .Service-body-maincontent {

        position: relative;
        height: 100vh;
        width: 100%;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        
    }

    .ServiceHeader {

        background-color: #F5D7BB;
        height: 45%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .Service-Title {

        text-align: center;
        color: #FF5C01;
        font-size: 45px;
        font-weight: 500;
        margin: 1%;

    }

    .Service-Intro {

        font-size: 15px;
        text-transform: uppercase;
        color: black;
        text-align: center;
        font-weight: 500;

        background-color: white;
        margin: 2%;
        padding: 1%;
        border-radius: 15px;
        width: 70%;
        align-items: center;

    }

    .Service-body-content {

        background-color: black;
        flex-grow: 1;
        width: 100%;
        position: relative;
        display: flex;

    }
    
    .Parag-Number {

        margin-top: 1%;
        height: 100%;
        width: 5%;
        border-style: solid;
        border-color: #FF5C01;
        border-radius: 15px;
        border-width: 3px;
        background-color: black;
        z-index: 2;
        padding-top: 3%;

        color: #FF5C01;
        font-size: 38px;
        text-align: center;
        font-weight: 600;

        animation: slideFromBottom 1s ease-in-out forwards;

    }

    @keyframes slideFromBottom {
        0% 
            {
                transform: translateY(100%);
            }
        100% 
            {
                transform: translateY(0%);
            }
    }

    .BlackRibbon {

        background-color: #222222;
        height: 12%;
        width: 100%;
        margin-top: 1.7%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FF5C01;
        font-size: 20px;
        font-weight: 500;
        top: calc(50% - 10%);
        right: 0;

        animation: slideFromLeft 2s ease-in-out forwards;
        animation-delay: 1s;
        opacity: 0;

    }

    .BlackRibbon p {

        opacity: 0;
        animation: fadein 1s ease-in-out forwards;
        animation-delay: 3s;

    }

    @keyframes slideFromLeft {
        0% 
            {
                transform: translateX(-100%);
                opacity: 1;
            }
        100% 
            {
                transform: translateX(0%);
                opacity: 1;
            }
    }

    @keyframes fadein {
        0% 
            {
                opacity: 0;
            }
        100% 
            {
                opacity: 1;
            }
    }

    .Description-Wrapped {

        display: flex;
        flex-direction: column;
        width: 100%;

    }

    .Wrapped-contents {

        display: flex;
        flex-direction: row;
        width: 100%;

    }

    .Service-Description {

        font-size: 13px;
        color: white;
        width: 40%;

        animation: slideFromLeft 1s ease-in-out forwards, fadein 2s ease-in-out forwards;
        animation-delay: 4s;

        opacity: 0;
        

    }

    .Service-Description p {

        margin: 2% 0% 8% 2%;

    }

    .Service-Card {

        height: 100%;
        width: 27%;
        margin: 1% 0% 2% 2%; 

    }
   

</style>
