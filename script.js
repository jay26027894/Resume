/*<script>
    // Smooth scrolling function
    function scrollToSection(sectionId) {
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('#firstsection');
    });

    document.getElementById('about-link').addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('#secondsection');
    });

    document.getElementById('projects-link').addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('#fourthsection');
    });
</script>
.
.
.
.
<nav>
    <div class="left">Portfolio</div>
    <div class="right">
        <ul>
            <li><a id="home-link" href="#firstsection">Home</a></li>
            <li><a id="about-link" href="#secondsection">About</a></li>
            <li><a id="projects-link" href="#fourthsection">Projects</a></li>
        </ul>
    </div>
</nav>

*/
 <script>
        function scrollToSection(sectionId) {
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        document.getElementById('home-link').addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSection('#firstsection');
        });

        document.getElementById('about-link').addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSection('#secondsection');
        });

        document.getElementById('projects-link').addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSection('#fourthsection');
        });
    </script>

