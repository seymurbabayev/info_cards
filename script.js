const teaMembers = [
    {
        name: "John Smith",
        position: "CEO",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
    },
    {
        name: "Olivia Harper",
        position: "HR Director",
        img: "https://c.stocksy.com/a/9ObL00/z9/5148613.jpg",
    },
    {
        name: "Sebastian Reyes",
        position: "CFO",
        img: "https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/tech-job-cuts-scientology-trials-ev-random-novel/@@images/rectangular_image/page-header?v=1668558373.12",
    },
    {
        name: "Lucas Steele",
        position: "CTO",
        img: "https://omghcontent.affino.com/AcuCustom/Sitename/DAM/206/PHIL-ANDREW-1200px-MIN_Main.jpg",
    },
    {
        name: "Monica Stan",
        position: "CMO",
        img: "https://s.hdnux.com/photos/01/03/10/00/17596472/7/1200x0.jpg",
    },
    {
        name: "Isabella Chen",
        position: "COO",
        img: "https://sawoman.com/wp-content/uploads/2023/02/stlukes-vicki-1.jpg",
    }
];

const members = teaMembers.map((item) => {
    return `
        <div class="card text-center" style="width: 18rem">
            <img src="${item.img}" class="card-img-top w-100" style="height: 200px" alt="${item.name}" />
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.position}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>`
        
}).join('');

console.log(members);

const cardsBlock = document.querySelector('#cardsBlock')

cardsBlock.innerHTML = members;