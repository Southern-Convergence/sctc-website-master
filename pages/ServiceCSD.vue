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
                    <p class="PN01" style="margin-bottom: 80%;">01</p> <br />
                    <p class="PN02" style="margin-bottom: 60%;">02</p> <br />
                    <p class="PN03" style="opacity: 0;">03</p> <br />
                </div>

                <div class="Description-Wrapped">

                <div class="BlackRibbon">

                    <p> PROJECTS </p>

                </div>

                <div class="Wrapped-contents">

                <div class="Service-Description text-justify">

                    <p class="SD01">
                        At our core, we are dedicated to crafting software solutions that are not only tailored to your unique 
                        business needs but also optimized to drive your organization towards its objectives. Our approach begins 
                        with a deep understanding of your business and operational processes, allowing us to design solutions that 
                        seamlessly integrate with your existing workflows and infrastructure.
                    </p>

                    <p class="SD02">
                        Throughout the development process, we prioritize collaboration and communication, working closely with you 
                        to ensure that every aspect of the software aligns with your goals and objectives. This continuous dialogue 
                        enables us to adapt and refine the solution in real-time, ensuring that it evolves in line with your evolving needs.
                    </p>

                    <p class="SD03">
                        With our team of experienced professionals by your side, your software needs are in capable hands. Our passion 
                        lies in leveraging technology to drive business success, and we are excited about the opportunity to collaborate 
                        with businesses on their journey towards growth and innovation.
                    </p>

                </div>

                    <div class="Service-Card">

                        <ServiceCarousel class="Service-Carousel"/>

                    </div>

                    <div class="Past-Projects">

                        <v-carousel :show-arrows="false" hide-delimiters cycle @change="updateCurrentIndex">
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <div class="text-h2">{{ slide }}</div>
                                    <p style="color: white; margin: 10% 0% 0% 10%;"> {{ texts[i] }} </p>
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
            ],
        texts: 
            [
        
                'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ',
                'placeholder 2',
                'placeholder 3',
                
            ],
        }
    }
}

</script>

<style scoped>

    @import url(/assets/css/ServicePage.css);
    
</style>
