const products = require('../data/products');
const productsController ={
    detail:(req,res) => {
       const id = req.params.id;
       console.log(typeof id)
       const product = products.find(product=>{
           return product.id == +id
       });
       
       const toThousand = n =>
    n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g,
    "." ) ;
       
        res.render('productDetail',{
            product,
            toThousand,
        })

    },

};
module.exports = productsController;