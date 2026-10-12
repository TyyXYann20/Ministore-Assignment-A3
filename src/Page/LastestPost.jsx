import React from 'react'
import post_item_1 from '../assets/post-item1.jpg'
import post_item_2 from '../assets/post-item2.jpg'
import post_item_3 from '../assets/post-item3.jpg'
import insta_1 from '../assets/insta-item1.jpg'
import insta_2 from '../assets/insta-item2.jpg'
import insta_3 from '../assets/insta-item3.jpg'
import insta_4 from '../assets/insta-item4.jpg'
import insta_5 from '../assets/insta-item5.jpg'


function LastestPost() {
  return (
    <div><section id="latest-blog" className="padding-large">
    <div className="container">
      <div className="row">
        <div className="display-header d-flex justify-content-between pb-3">
          <h2 className="display-7 text-dark text-uppercase">Latest Posts</h2>
          <div className="btn-right">
            <a href="blog.html" className="btn btn-medium btn-normal text-uppercase">Read Blog</a>
          </div>
        </div>
        <div className="post-grid d-flex flex-wrap justify-content-between">
          <div className="col-lg-4 col-sm-12">
            <div className="card border-none me-3">
              <div className="card-image">
                <img src={post_item_1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-body text-uppercase">
              <div className="card-meta text-muted">
                <span className="meta-date">feb 22, 2023</span>
                <span className="meta-category">- Gadgets</span>
              </div>
              <h3 className="card-title" style={{fontSize:20}}>
                <a href="#" style={{color:"black", textDecoration:"none"}}>Get some cool gadgets in 2023</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card border-none me-3">
              <div className="card-image">
                <img src={post_item_2} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-body text-uppercase">
              <div className="card-meta text-muted">
                <span className="meta-date">feb 25, 2023</span>
                <span className="meta-category">- Technology</span>
              </div>
              <h3 className="card-title" style={{fontSize:20}}>
                <a href="#" style={{color:"black", textDecoration:"none"}}>Technology Hack You Won't Get</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card border-none me-3">
              <div className="card-image">
                <img src={post_item_3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="card-body text-uppercase">
              <div className="card-meta text-muted">
                <span className="meta-date">feb 22, 2023</span>
                <span className="meta-category">- Camera</span>
              </div>
              <h3 className="card-title" style={{fontSize:20}}>
                <a href="#" style={{color:"black", textDecoration:"none"}}>Top 10 Small Camera In The World</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonials" className="position-relative">
    <div className="container">
      <div className="row">
        <div className="review-content position-relative">
          <div className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center">
            <svg className="chevron-left">
              <use xlinkHref="#chevron-left" />
            </svg>
          </div>
          <div className="swiper testimonial-swiper">
            <div className="quotation text-center">
              <svg className="quote">
                <use xlinkHref="#quote" />
              </svg>
            </div>
            <div className="swiper-wrapper">
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review"></i>
                  <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-half">
                      <use xlinkHref="#star-half"></use>
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty"></use>
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review"></i>
                  <blockquote>“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-half">
                      <use xlinkHref="#star-half"></use>
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty"></use>
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center">
            <svg className="chevron-right">
              <use xlinkHref="#chevron-right" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination"></div>
  </section>
  <section id="subscribe" className="container-grid padding-large position-relative overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
          <div className="col-md-6 col-sm-12">
            <div className="display-header pe-3">
              <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
              <p>Get latest news, updates and deals directly mailed to your inbox.</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <form className="subscription-form validate">
              <div className="input-group flex-wrap">
                <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required="" />
                <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section id="instagram" class="padding-large overflow-hidden no-padding-top">
      <div class="container">
        <div class="row">
          <div class="display-header text-uppercase text-dark text-center pb-3">
            <h2 class="display-7">Shop Our Insta</h2>
          </div>
          <div class="d-flex flex-wrap">
            <figure class="instagram-item pe-2">
              <a href="https://templatesjungle.com/" class="image-link position-relative">
              <img src={insta_1} alt="instagram" class="insta-image" />
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="https://templatesjungle.com/" class="image-link position-relative">
              <img src={insta_2} alt="instagram" class="insta-image" />
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="https://templatesjungle.com/" class="image-link position-relative">
              <img src={insta_3} alt="instagram" class="insta-image" />
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="https://templatesjungle.com/" class="image-link position-relative">
              <img src={insta_4} alt="instagram" class="insta-image" />
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure class="instagram-item pe-2">
              <a href="https://templatesjungle.com/" class="image-link position-relative">
                <img src={insta_5} alt="instagram" class="insta-image" />
                <div class="icon-overlay position-absolute d-flex justify-content-center">
                  <svg class="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  
  
  </div>
  )
}

export default LastestPost;