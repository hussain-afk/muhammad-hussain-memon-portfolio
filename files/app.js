// --- 0. LOADER LOGIC ---
        let progress = 0;
        const progressText = document.getElementById("progress");
        const loader = document.getElementById("loader");

        const interval = setInterval(() => {
            progress++;
            progressText.textContent = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.classList.add("hide");
                }, 300);
            }
        }, 50); // 100 * 50ms = 5s


        // --- 4. NAVIGATION & DROPDOWN LOGIC ---
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const resumeBtn = document.getElementById('resumeBtn');
        const resumeDropdown = document.getElementById('resumeDropdown');

        // Mobile Menu Toggle
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        document.querySelectorAll("#mobile-menu a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });

        // Resume Dropdown Toggle
        resumeBtn.onclick = (e) => {
            e.stopPropagation();
            resumeDropdown.classList.toggle('hidden');
        };

        // Close everything when clicking outside
        // Close mobile menu when a link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.onclick = () => mobileMenu.classList.add('hidden');
        });




        document.addEventListener('DOMContentLoaded', () => {
            // 1. TYPING ANIMATION
            const typingSpan = document.getElementById('typing-text');
            const roles = ["I craft visually appealing, responsive websites using only HTML and CSS.",
                "My goal is to turn simple ideas into elegant digital designs."];
            typingSpan.style.color = '#8b949e';
            let roleIdx = 0, charIdx = 0, isDeleting = false;

            function typeEffect() {
                const currentRole = roles[roleIdx];
                typingSpan.textContent = isDeleting
                    ? currentRole.substring(0, charIdx--)
                    : currentRole.substring(0, charIdx++);

                let speed = isDeleting ? 50 : 150;
                if (!isDeleting && charIdx === currentRole.length + 1) {
                    speed = 2000; isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false; roleIdx = (roleIdx + 1) % roles.length;
                }
                setTimeout(typeEffect, speed);
            }
            if (typingSpan) typeEffect();

            // 2. CUSTOM TRAILING CURSOR
            const dot = document.createElement('div');
            const outline = document.createElement('div');
            dot.className = 'cursor-dot'; outline.className = 'cursor-outline';
            document.body.append(dot, outline);

            window.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                dot.style.transform = `translate(${clientX}px, ${clientY}px)`;
                outline.animate({ transform: `translate(${clientX}px, ${clientY}px)` }, { duration: 500, fill: "forwards" });
            });



            // 4. NAVIGATION & DROPDOWN LOGIC (FIXED)

        });



        // 3. SCROLL REVEAL (Intersection Observer)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section, .bg-[#161b22]').forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });