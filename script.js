const $mortageAmmount = document.getElementById('amount')
const $mortageTerm = document.getElementById('term')
const $morategeInterest = document.getElementById('rate')
const $mortageType = document.querySelectorAll('.radio-input')
const $submitForm = document.querySelector('.calculate-repayment')
const $monthlyResult = document.querySelector('.monthly-result')
const $totalResult = document.querySelector('.total-result')



$submitForm.addEventListener('click', (e) =>{
    if($mortageAmmount.value === "" || $mortageTerm.value === "" ||$morategeInterest.value === ""){

    }
    document.querySelector('.results-placeholder').classList.add('hidden')
    document.querySelector('.results').classList.remove('hidden')
    e.preventDefault()
    const parseInterestValueAsNumber = Number($morategeInterest.value)
    const parseMortageValueAsNumber = Number($mortageAmmount.value)

    const interest = parseMortageValueAsNumber * (parseInterestValueAsNumber/100)
    const totalSum = parseMortageValueAsNumber + interest
    const sumPerMonth = (totalSum/Number($mortageTerm.value)) / 12
    console.log(sumPerMonth)
    if($mortageType[0].checked === true){
        $monthlyResult.textContent = "📖" + Math.round(sumPerMonth)
        $totalResult.textContent = "📖" + Math.round(totalSum)
    }else if($mortageType[1].checked === true){
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }else{
        alert('please choose a option')
    }
})