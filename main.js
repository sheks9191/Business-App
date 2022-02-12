submitBtn = document.getElementById('business-status')

submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    calculatePercentageProfitOrLoss()
})

const  calculatePercentageProfitOrLoss = () => {
    const costPrice = document.getElementById('cost-price').value,
          sellingPrice = document.getElementById('selling-price').value,
          status = document.getElementById('status'),
          result = document.getElementById('result'),
          profitTexts = document.querySelectorAll('.profit'),
          lossTexts = document.querySelectorAll('.loss');

    const cost = parseFloat(costPrice)
    const sell = parseFloat(sellingPrice)

    const statusValue  = Math.abs(sell - cost)

    status.value = (statusValue).toFixed(2)

    const resultValue = ((statusValue / cost) * 100);
    result.value = (resultValue).toFixed(2)

     

   
    
    if(sell > cost) {
        
               profitTexts.forEach(profitText => {
            
               profitText.style.color = '#16f529'
                
            })

    }else if (sell < cost) {
            
               lossTexts.forEach(lossText => {
            
                lossText.style.color = 'red'

            })   
    }else{

         profitTexts.forEach(profitText => {
            
               profitText.style.color = 'beige'
                
            })

              lossTexts.forEach(lossText => {
            
                lossText.style.color = 'beige'

            })
           
    }



}