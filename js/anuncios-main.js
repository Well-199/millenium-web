
async function anunciosMain(){

    const anuncios = `
    <div class="container">
        <h3 class="text-uppercase font-weight-bold wow-outer"><span class="wow slideInDown">Popular properties</span></h3>
        <div class="row row-lg-50 row-35 offset-top-2">

            <!-- Aqui inicia o for provavelmente -->

            <div class="col-md-6 wow-outer">
                <!-- Post Modern inicio do for loop-->
                <article class="post-modern wow slideInLeft">
                <a class="post-modern-media" href="#">
                    <img src="images/grid-blog-1-571x353.jpg" alt="" width="571" height="353"/>
                </a>
                <h4 class="post-modern-title"><a class="post-modern-title" href="#">5619 Walnut Hill Ln, Dallas, TX 75229</a></h4>
                <ul class="post-modern-meta">
                    <li><a class="button-winona" href="#">$1500/mon</a></li>
                    <li>30 Sq. Ft.</li>
                    <li>3 Bedrooms</li>
                </ul>
                <p>A comfortable residential property located in a quiet and cozy area.</p>
                </article>
            </div>

            <!-- Aqui Termina o for provavelmente -->

            <div class="col-md-6 wow-outer">
                <!-- Post Modern-->
                <article class="post-modern wow slideInLeft"><a class="post-modern-media" href="#"><img src="images/grid-blog-2-571x353.jpg" alt="" width="571" height="353"/></a>
                <h4 class="post-modern-title"><a class="post-modern-title" href="#">1808 Bolingbroke Pl, Fort Worth, TX 76140</a></h4>
                <ul class="post-modern-meta">
                    <li><a class="button-winona" href="#">$1300/mon</a></li>
                    <li>40 Sq. Ft.</li>
                    <li>2 Bedrooms</li>
                </ul>
                <p>Perfect for those who love both city life and the countryside.</p>
                </article>
            </div>
            <div class="col-md-6 wow-outer">
                <!-- Post Modern-->
                <article class="post-modern wow slideInLeft"><a class="post-modern-media" href="#"><img src="images/grid-blog-3-571x353.jpg" alt="" width="571" height="353"/></a>
                <h4 class="post-modern-title"><a class="post-modern-title" href="#">924 Bel Air Rd, Los Angeles, CA 90077</a></h4>
                <ul class="post-modern-meta">
                    <li><a class="button-winona" href="#">1800/mon</a></li>
                    <li>50 Sq. Ft.</li>
                    <li>4 Bedrooms</li>
                </ul>
                <p>Located in 5 mins from downtown, this property is great for anyone.</p>
                </article>
            </div>
            <div class="col-md-6 wow-outer">
                <!-- Post Modern-->
                <article class="post-modern wow slideInLeft"><a class="post-modern-media" href="#"><img src="images/grid-blog-4-571x353.jpg" alt="" width="571" height="353"/></a>
                <h4 class="post-modern-title"><a class="post-modern-title" href="#">13510 W Cheery Lynn Rd, Avondale, AZ 85392</a></h4>
                <ul class="post-modern-meta">
                    <li><a class="button-winona" href="#">$2700/mon</a></li>
                    <li>90 Sq. Ft.</li>
                    <li>2 Bedrooms</li>
                </ul>
                <p>A luxury mansion for people who enjoy the high-end amenities.</p>
                </article>
            </div>
            <div class="col-md-12 wow-outer">
                <a class="button button-primary button-winona button-md" href="#">Paginação </a>
            </div>
        </div>
    </div>
    `
    document.getElementById('anuncios-main').innerHTML += anuncios
}

anunciosMain()