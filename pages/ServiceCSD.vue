<template>

    <div class="body-service">

        <ServicesSidebar />


        <div class="body-main-content ml-auto" >
            
            <div class="overlay text-center">

                <p class="text-bold text-h3" style="margin-right: 25%; color: #FF5C01;"> Custom Software Development</p>

                <br />

                <p class="text-medium text-h5 text-justify" style="margin: 2% 20% 0% 0%;">
                    We specialize in building and optimizing software solutions tailored to unique business and organizational objectives and processes. 
                    Through close collaboration throughout the development process, we ensure continuous alignment with business and operational goals. 
                    Our dedication is focused on delivering exceptional software solutions for every client.
                </p>

            </div>

            <div class="Body-headerImage"></div>

            <div class="body-content text-justify text-h6" style="margin: 0 10% 0 10%;">

                <p>
                    At our core, we are dedicated to crafting software solutions that are not only tailored to your unique business needs but also optimized to drive your organization towards its objectives. 
                    Our approach begins with a deep understanding of your business and operational processes, allowing us to design solutions that seamlessly integrate with your existing workflows and infrastructure.
                </p>

                <br />

                <p>
                    Throughout the development process, we prioritize collaboration and communication, working closely with you to ensure that every aspect of the software aligns with your goals and objectives. 
                    This continuous dialogue enables us to adapt and refine the solution in real-time, ensuring that it evolves in line with your evolving needs.
                </p>

                <br />

                <p>
                    With our team of experienced professionals by your side, your software needs are in capable hands. Our passion lies in leveraging technology to drive business success, 
                    and we are excited about the opportunity to collaborate with businesses on their journey towards growth and innovation.
                </p>

            </div>

            <div class="ImageCards">



            </div>

        </div>
     

    </div>

</template>

<style>

    .body-service {

        background-image: url(/assets/images/servicesBG.png);
        background-size: cover;
        margin: 0px;
        height: 100%;
        width: 100%;
        color: rgb(255, 255, 255);

    }

    .body-main-content {

        position: inherit;
        height: 100%;
        width: 80%;

    }

    .overlay {

        position: absolute;
        padding: 2%;
        height: 26.9%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.562);
        margin: 0;

    }

    .Body-headerImage {

        height: 28%;
        background-image: url(/assets/images/CustomServices.jpg);
        background-size: cover;
        width: 100%;

    }

    .body-content {

        padding: 2% 3% 3% 3%;
        

    }

    .ImageCards {

        width: 30%;
        height: 20%;


    }

    

</style>
