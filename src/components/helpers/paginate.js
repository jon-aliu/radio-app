const paginate = (users)=>{
    // numri i kartave per faqe
     const itemsPerPage = 12
    //  numrat e pagination
     const numberOfPages = Math.ceil(users.length / itemsPerPage)
    //  krijo nje liste te re, length i te cilit eshte numri i faqeve
     const formattedUser= Array.from({length:numberOfPages},(item,index)=>{
         const start = index * itemsPerPage
         return users.slice(start,start+itemsPerPage)
     }) 
     return formattedUser
}
export default paginate