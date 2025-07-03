// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks")
  navLinks.classList.toggle("active")
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      // Add blinking cursor
      element.innerHTML += '<span class="terminal-cursor"></span>'
    }
  }

  type()
}

// Matrix rain effect (simplified)
function createMatrixRain() {
  const matrixContainer = document.querySelector(".matrix-bg")
  if (!matrixContainer) return

  const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

  for (let i = 0; i < 50; i++) {
    const drop = document.createElement("div")
    drop.style.position = "absolute"
    drop.style.color = "rgba(0, 255, 0, 0.3)"
    drop.style.fontSize = "14px"
    drop.style.fontFamily = "JetBrains Mono, monospace"
    drop.style.left = Math.random() * 100 + "%"
    drop.style.animationDuration = Math.random() * 3 + 2 + "s"
    drop.style.animationName = "matrix-fall"
    drop.style.animationIterationCount = "infinite"
    drop.style.animationTimingFunction = "linear"
    drop.textContent = characters[Math.floor(Math.random() * characters.length)]

    matrixContainer.appendChild(drop)
  }
}

// Add matrix fall animation
const style = document.createElement("style")
style.textContent = `
    @keyframes matrix-fall {
        0% {
            transform: translateY(-100vh);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".skill-category, .project-card, .experience-item")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(50px)"
    el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    observer.observe(el)
  })
})

// Glitch effect for logo
function addGlitchEffect() {
  const logo = document.querySelector(".logo")
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.animation = "glitch 0.3s ease-in-out"
    })

    logo.addEventListener("animationend", () => {
      logo.style.animation = ""
    })
  }
}

// Terminal typing effect for contact form
function addTerminalEffects() {
  const inputs = document.querySelectorAll("input, textarea")

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.3)"
    })

    input.addEventListener("blur", () => {
      input.style.boxShadow = ""
    })
  })
}

// Contact form submission with cyber effects
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Validation
  if (!name || !email || !subject || !message) {
    showNotification("ERROR: All fields required", "error")
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showNotification("ERROR: Invalid email format", "error")
    return
  }

  // Simulate sending
  const submitBtn = this.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = "<span>PROCESSING...</span>"
  submitBtn.disabled = true
  submitBtn.style.animation = "pulse 1s infinite"

  setTimeout(() => {
    showNotification(`SUCCESS: Message sent from ${name}`, "success")
    this.reset()
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
    submitBtn.style.animation = ""
  }, 2000)
})

// Notification system
function showNotification(message, type) {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === "error" ? "var(--error-red)" : "var(--neon-green)"};
        color: var(--background);
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 0 20px ${type === "error" ? "rgba(255, 7, 58, 0.5)" : "rgba(57, 255, 20, 0.5)"};
    `

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-in"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Add slide animations for notifications
const notificationStyle = document.createElement("style")
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`
document.head.appendChild(notificationStyle)

// Random cyber text effect
function addCyberTextEffect() {
  const cyberElements = document.querySelectorAll(".neon-glow")

  cyberElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      const originalText = element.textContent
      const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?"
      let iterations = 0

      const interval = setInterval(() => {
        element.textContent = originalText
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return originalText[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")

        if (iterations >= originalText.length) {
          clearInterval(interval)
        }

        iterations += 1 / 3
      }, 30)
    })
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize typing effect
  const heroTitle = document.getElementById("heroTitle")
  if (heroTitle) {
    setTimeout(() => {
      typeWriter(heroTitle, "Khalid Sherif", 120)
    }, 1000)
  }

  // Initialize matrix rain
  createMatrixRain()

  // Add glitch effects
  addGlitchEffect()

  // Add terminal effects
  addTerminalEffects()

  // Add cyber text effects
  addCyberTextEffect()

  // Close mobile menu when clicking on links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("active")
    })
  })

  // Add loading screen effect
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Konami code easter egg
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code)

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    showNotification("CHEAT CODE ACTIVATED: CYBER MODE ENHANCED!", "success")
    document.body.style.filter = "hue-rotate(180deg) saturate(1.5)"

    setTimeout(() => {
      document.body.style.filter = ""
    }, 5000)

    konamiCode = []
  }
})

// Performance optimization: Throttle scroll events
let ticking = false

function updateScrollEffects() {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.2

  const hero = document.querySelector(".hero")
  if (hero && scrolled < hero.offsetHeight) {
    hero.style.transform = `translateY(${rate}px)`
  }

  ticking = false
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects)
    ticking = true
  }
})
