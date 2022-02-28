const api = require("..//controllers/product.controller")

const dataMock = {
    idProduct: 12,
    description: "bar",
    brand: "BOO",
    price :12500
  };
  
  describe('Suit de pruebas para Api ', () => {
  
      it('should call mocked getPostsProduct', async () => {
        
         let data ={
            idProduct: 12,
            description: "bar",
            brand: "BOO",
            price :12500
        }; 
        const res = await  api.create(data)
        expect(res.data).toEqual(dataMock)
      })
  
  
      it('it is Palindrome', async () => {
         let string = "Oso"
      
       const res = api.palindromeChecker(string)
       expect(res).toEqual(true)
     })
 
     
    


    }) 