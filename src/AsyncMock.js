const products = [
    {id:'1', name:'Pack Elena con babero reversible',price: 1500, category:'Packs',img:'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/300651763_623122379401871_5996914876555999443_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2MnRobGiackAX8nhTVu&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT9Nq2N7rXqJ_c5gzU32Yt2U_lgJqLLn7BVGv9BHBXqP6g&oe=63440726',stock:10,description:'Babero reversible tela' },
    {id:'2', name:'Pack Elena con babero reversible',price: 1500, category:'Packs',img:'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/300624729_623122332735209_4368225347397940654_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YDSPcLOhUK8AX-niNjl&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT8Fnm-oROE2YZgHdrwWtgydsC-b3DkG2Xq6M86im9amGQ&oe=63430BEC',stock:10,description:'Babero reversible tela' },
    {id:'3', name:'Pack Elena con babero reversible',price: 1500, category:'Packs',img:'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/300584289_623122312735211_2218175712916268198_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=J2BjGwkz3cUAX-9rOZI&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT-bgTL_a2eRCNhqWOBNKuQOmMlctxEgbdz_VXMRjY7BRg&oe=6343075E',stock:10,description:'Babero reversible tela' },
    {id:'4', name:'Pack Elena con babero reversible',price: 1500, category:'Packs',img:'https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/300633574_623122176068558_197599784738317491_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QUyaBvpyN0EAX-WeO4C&_nc_ht=scontent.ftuc4-1.fna&oh=00_AT94alLxsUdwYEf8e3AQdk0b60Vf6T8AHCeTQeIbfQd7bg&oe=63436FB2',stock:10,description:'Babero reversible tela' }

]

export const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        }, 1500)
    })
}

