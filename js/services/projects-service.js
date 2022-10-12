const gProjects = [
    {
      id: "touch-nums",
      name: "Touch Numbers",
      title: "Better push those Numbers",
      desc: "lorem ipsum lorem ipsum lorem ipsum",
      url: "https://nadavshambi.github.io/Touch-Nums/",
      publishedAt: 1448693940000,
      labels: ["Matrixes", "click events"]
    },
    {
      id: "dayNightBg",
      name: "iPhone Day&Night Effect",
      title: "Always answer your pets first!",
      desc: "lorem ipsum lorem ipsum lorem ipsum",
      url: "https://nadavshambi.github.io/NadavShambi-fun-w-Css/",
      publishedAt: 1448693940000,
      labels: ["CSS ONLY", "UX"]
    },
    {
      id: "shambour",
      name: "Shambour",
      title: "Order colors",
      desc: "lorem ipsum lorem ipsum lorem ipsum",
      url: "https://nadavshambi.github.io/Shambour/",
      publishedAt: 1448693940000,
      labels: ["Flex Box", "Responsive Design"]
    },
    {
      id: "rick&morty",
      name: "Rick & Morty",
      title: "Fan made Site",
      desc: "lorem ipsum lorem ipsum lorem ipsum",
      url: "https://nadavshambi.github.io/Rick-Morty/",
      publishedAt: 1448693940000,
      labels: ["Bootstrap", "Responsive Design"]
    },
    {
      id: "bookStore",
      name: "Book Store",
      title: "Read Succeed",
      desc: "lorem ipsum lorem ipsum lorem ipsum",
      url: "https://nadavshambi.github.io/book-store/",
      publishedAt: 1448693940000,
      labels: ["Warm", "Menegment App"]
    },
    {
      id: "minesweeper",
      name: "Minesweepr+",
      title: "Minesweeper with a twist!",
      desc: "lorem ipsum lorem ipsum lorem ipsum",
      url: "https://nadavshambi.github.io/minesweeper/",
      publishedAt: 1448693940000,
      labels: ["Warm", "Menegment App"]
    }
  
  ]
  

  function getProjects(){
    return gProjects
  }
  
  function getProjectById(id){
    return gProjects.find((project)=>project.id===id)
  }