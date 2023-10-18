
function Carsoul() {
    return (
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button1" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button1" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button1" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/images/GOOD_HABIT_MAIN.jpg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>First product label</h5>
            <p>Some representative placeholder content for the first product.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/images/gci.goodhabit425.avif" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Second product label</h5>
            <p>Some representative placeholder content for the second product.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/images/723_main.jpg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Third product label</h5>
            <p>Some representative placeholder content for the third product.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    );
  }
  
  export default Carsoul;