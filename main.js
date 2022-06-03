
window.odometerOptions = {
    auto: true, // Don't automatically initialize everything with class 'odometer'
    format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 1000 * 1, // Change how long the javascript expects the CSS animation to take
    animation: "count"
    
};


const module = {
    current_slide: 0,
    slides: [{
        title: "The Journey to $105,000",
        description: "The road to fertility is a long and costly one. It all starts tomorrow.",
        total_cost: 0,
        slide_cost: 0,
        progress: 0,
        days_invested: 0,
    },{
        title: "First semen analysis",
        description: "First expense that came out of pocket. It was a long trip to the clinic in Long Island to receive my first report of no sperm.",
        total_cost: 127.10,
        slide_cost: 127.10,
        progress: 1,
        days_invested: 1,
        
    },{
        title: "First visit with my urologist",
        description: "The road to find an alternative method of having a child officially begins here.",
        total_cost: 3579.55,
        slide_cost: 3452.45,
        progress: 7,
        days_invested: 87,
        
    },{
        title: "Urologist Mandated Semen Analysis",
        description: "This was the first time I gave a semen sample in a clinic specializing in fertility and noticed I was the only Black man in the facility.",
        total_cost: 4220.55,
        slide_cost: 641,
        progress: 9,
        days_invested: 116,
        
    },{
        title: "Testicle Ultrasound",
        description: "This is a diagnostic test that detects and evaluates  varicose veins within the scrotum, and in preparation of the varicocelectomy.",
        total_cost: 7197.03,
        slide_cost: 2976.48,
        progress: 14,
        days_invested: 119,
        
    },{
        title: "Varicocele Diagnosis",
        description: "The first harrowing news through this journey. The diagnosis is a varicose vein in my testicle, which is a swollen vein that decreases sperm quality. I will need to  have surgery to increase sperm production.",
        total_cost: 7918.03,
        slide_cost: 721.00,
        progress: 16,
        days_invested: 129,
        
    },{
        title: "Pre-Surgical Preparations",
        description: "This is a gauntlet of pre-surgical appointments that includes two doctors, x-rays, EKGs, and blood work.",
        total_cost: 10427.37,
        slide_cost: 2509.34,
        progress: 21,
        days_invested: 151,
        
    },{
        title: "Varicocelectomy Surgery",
        description: "This procedure removes the varicocele in my testicles to increase oxygen flow and sperm production for a future micro-TESE, a testicular tissue procedure.",
        total_cost: 20089.37,
        slide_cost: 9662.00,
        progress: 41,
        days_invested: 154,
        
    },{
        title: "Final Mandated Semen Analysis",
        description: "This was the final semen analysis after the varicocelectomy. No sperm detected once again.",
        total_cost: 21339.37,
        slide_cost: 1250.00,
        progress: 43,
        days_invested: 275,
        
    },{
        title: "Urologist Perscribe micro-TESE",
        description: "This is the appointment where I learned about what is taking place with the next procedure.",
        total_cost: 22185.37,
        slide_cost: 846,
        progress: 45,
        days_invested: 290,
        
    },{
        title: "Pre-surgical prep",
        description: "This time around they were kind and let me off the hook for the chest x-ray, but I still had to do a EKG and blood work.",
        total_cost: 23883.74,
        slide_cost: 1698.37,
        progress: 49,
        days_invested: 330,
        
    },{
        title: "Micro-TESE surgery",
        description: "This is the most expensive line item in this whole journey. Charges include anesthesia, the surgery, and freezing my testicular tissue.",
        total_cost: 49196.12,
        slide_cost: 25312.38,
        progress: 100,
        days_invested: 336,
        
    }],
    nextSlide: function(){
        this.current_slide = this.current_slide + 1;
        this.buildSlide();
    },
    prevSlide: function(){
        this.current_slide = this.current_slide - 1;
        this.buildSlide();
    },
    buildSlide: function(){
        const slide = this.slides[this.current_slide];
        const module = document.querySelector(".module");
        module.querySelector(".invested").querySelector("span").innerHTML = slide.days_invested;
        module.querySelector(".cost").querySelector("span").innerHTML = slide.total_cost;
        module.querySelector(".progress .bar").style.width = `${slide.progress}%`;
        // module.querySelector(".progressContainer .value span").innerHTML = slide.progress;
        module.querySelector("h3").innerHTML = slide.title;
        module.querySelector("p").innerHTML = slide.description;
        module.querySelector(".main .cost span").innerHTML = slide.slide_cost.toLocaleString();
    }
};


    

    module.buildSlide();

    document.querySelector(".module .next").addEventListener("click", e => {
        e.preventDefault();
        module.nextSlide();
    })
    document.querySelector(".module .prev").addEventListener("click", e => {
        e.preventDefault();
        module.prevSlide();
    })


