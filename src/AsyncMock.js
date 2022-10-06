const products = [
    {id:'1', name:'Pack Elena con babero reversible 1',price: 1500, category: 'packs', img:'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/300651763_623122379401871_5996914876555999443_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2MnRobGiackAX8nhTVu&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT9Nq2N7rXqJ_c5gzU32Yt2U_lgJqLLn7BVGv9BHBXqP6g&oe=63440726',stock:10,description:'Babero reversible tela' },
    {id:'2', name:'Pack Elena con babero reversible 2',price: 1500, category: 'packs', img:'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/300624729_623122332735209_4368225347397940654_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YDSPcLOhUK8AX-niNjl&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT8Fnm-oROE2YZgHdrwWtgydsC-b3DkG2Xq6M86im9amGQ&oe=63430BEC',stock:10,description:'Babero reversible tela' },
    {id:'3', name:'Pack Elena con babero reversible 3',price: 1500, category: 'tejido' ,img:'https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/279771568_553197259727717_6281852422731668021_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RhQsI8juhUYAX94aPNt&_nc_ht=scontent.faep6-1.fna&oh=00_AT9G2ADca6-N87b3UyoTE6LLuKZdHj20gdMPSRBbKy1QAA&oe=63437AA0',stock:10,description:'Campera tejida con hilo de algodon' },
    {id:'4', name:'Pack Elena con babero reversible 4',price: 1500, category: 'tejido', img:'https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/279582599_552505309796912_3916181661561678931_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p6L89pVmXFAAX8Ed9Sd&_nc_ht=scontent.faep6-1.fna&oh=00_AT_XWbUU90lCNsm9ZT395IfIw1MlvML0DMsJ-nUtqOI-5A&oe=6344B73F',stock:10,description:'Campera tejida con hilo de algodon' },
    {id:'5', name:'Amigrumi pinguino',price: 2000, category:'amigrumi', img:'https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/305204068_632215168492592_2084284203082407723_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=ZTkMhoS2OkcAX_9VeoY&_nc_ht=scontent.faep6-1.fna&oh=00_AT89Ey-tLPj_-jnGz8fqaQ1Q5wA-kNGBoc2W1XEzOjfwLg&oe=6344B575', stock:'solo a pedido',description:'Amigruimi tejido con hilo de algodon'}
]

export const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        }, 1500)
    })
}


export const getProduct = (id) =>{
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res(products.find(prod => prod.id === id))
        },1000)
    })
}


export const getProductsByCategory = (categoryid) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryid))
        },1000)
    })
}