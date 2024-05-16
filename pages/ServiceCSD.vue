<template>
  <div class="body-service">
    <ServicesSidebar />

    <div class="body-main-content">
      <p class="text-center ServiceTitle">Custom Software Development</p>

      <p class="text-justify-center text-center ServiceSubtext">
        We specialize in building and optimizing software solutions tailored to
        unique business and organizational objectives and processes. Through
        close collaboration throughout the development process, we ensure
        continuous alignment with business and operational goals. Our dedication
        is focused on delivering exceptional software solutions for every
        client.
      </p>

      <div class="body-content text-justify">
        <div class="ServiceDescription">
          <div class="SNumbering">
            <p style="color: #ff5c01; font-size: 25px; font-weight: 600">01</p>

            <p>
              At our core, we are dedicated to crafting software solutions that
              are not only tailored to your unique business needs but also
              optimized to drive your organization towards its objectives. Our
              approach begins with a deep understanding of your business and
              operational processes, allowing us to design solutions that
              seamlessly integrate with your existing workflows and
              infrastructure.
            </p>
          </div>

          <div class="SNumbering">
            <p style="color: #ff5c01; font-size: 25px; font-weight: 600">02</p>

            <p>
              Throughout the development process, we prioritize collaboration
              and communication, working closely with you to ensure that every
              aspect of the software aligns with your goals and objectives. This
              continuous dialogue enables us to adapt and refine the solution in
              real-time, ensuring that it evolves in line with your evolving
              needs.
            </p>
          </div>

          <div class="SNumbering">
            <p style="color: #ff5c01; font-size: 25px; font-weight: 600">03</p>

            <p>
              With our team of experienced professionals by your side, your
              software needs are in capable hands. Our passion lies in
              leveraging technology to drive business success, and we are
              excited about the opportunity to collaborate with businesses on
              their journey towards growth and innovation.
            </p>
          </div>
        </div>

        <div class="CContainer">
          <ServiceCarousel style="margin-left: 5%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.body-service {
  background-image: url(/assets/images/servicesBG.png);
  background-size: cover;
  margin: 0px;
  height: 100vh;
  width: 100%;
  color: rgb(255, 255, 255);
  overflow-y: hidden;
}

.body-main-content {
  position: relative;
  height: 100vh;
  width: 80%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
}

.ServiceTitle {
  font-size: 55px;
  color: #ff5c01;
  margin-top: 2%;
  font-weight: 500;
}

.ServiceSubtext {
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 20px;
  margin: auto 2% 5% 2%;
  padding: 0% 5% 0% 5%;
  font-weight: 500;
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

.ServiceDescription {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  margin: 2% 0% 0% 0%;
}

.CContainer {
  position: absolute;
  top: 30%;
  left: calc(60% + 5%);
  overflow-x: auto hidden;
}

.SNumbering p {
  margin: 0% 0% 2% 10%;
  font-size: 11px;
}

@media (max-width: 768px) {
  .Sidebar {
    display: none;
  }
  .body-main-content {
    width: 100%;
  }
  .ServiceTitle {
    font-size: 30px;
    margin-bottom: 10%;
  }
  .ServiceSubtext {
    font-size: 12px;
    margin: 0% 0% 15% 0%;
  }
  .body-service {
    background-image: url(/assets/images/mobile-bg.png);
    background-size: cover;
  }
  .body-content {
    margin: auto 3% 0% 3%;
    font-size: 12px;
  }
  .carousel {
    margin-top: 2%;
  }
  .CCard {
    max-width: 300;
  }
  .SNumbering p {
    font-size: 8px;
  }
  .CContainer {
    top: 37%;
    left: calc(50% + 5%);
  }
  .ServiceDescription {
    display: block;
    grid-template-columns: unset;
    grid-gap: unset;
  }
}
</style>
