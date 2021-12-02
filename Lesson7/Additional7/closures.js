// Створити карту користувача(Usеr Card):
const userCard = (number) => {
    if ([1,2,3].includes(number)) {
        let balance = 100;
        let transactionLimit = 100;
        let historyLogs = [
            {info1: 'value1'},
            {info2: 'value2'},
            {info3: 'value3'},
            {info4: 'value4'},
            {info5: 'value5'},
        ];
          let key = number;
        return {
            getCardOptions() {
                return {
                   'balance': balance,
                   'transactionLimit': transactionLimit,
                   'historyLogs': historyLogs,
                   'key': key,
                }
            },
            putCredits(credits){
                let oldBalance = balance;
                balance = oldBalance + credits;
            },
            takeCredits(credits) {
                let oldBalance  = balance;
                if (oldBalance - credits >= 0 && credits <= transactionLimit) {
                    balance = oldBalance - credits;
                } else {
                    console.error('More than limit')
                }
            },
            setTransactionLimit(limit) {
                transactionLimit = limit;
            },
            transferCredits(credits, card){
                let takeCreditsPlusTax = credits * (100 + 0.5) / 100;
                card.takeCredits(takeCreditsPlusTax);
                let putCreditsMinusTax = credits * (100) / 100;
                this.putCredits(putCreditsMinusTax);
            },
        }
    }
    else {
        console.error('enter valid number');
    }
}
// Створити функцiю <<userCard>> яка приймае число(будь-яке число) об'ект з методами:
// const cardЗ = userCard(З); // retums an object with methods
//
//
// 1•   повертае
//
//
// User Card методи:
//     getCardOptions. Дана функцiя поверта€ об'€кт котрий мiстить iнформацiю про карту:
//
// cardЗ.getCardOptions(); // returns options object with card info
//
// Об'ект мае мiстити такi властивостi:
// •	balance (по замовчуванням 100)
// •	transactionLimit (по замовчуванням 100. Це лiмiт коштiв якi ви можете взяти з карти)
// •	historyLogs (масив об'ектiв який мiстить iнформацiю про операцiУ та трансакцu данноУ карти)
// •	key (число в дiапазонi[l; 3] залежить вiд числа яке ви передали в userCard функцiУ. Кожна карта повинна мати унiкальний key)
//
//
//
//
// putCredits.  Ця  функцiя  отримуе	певну кiлькiсть	грошей i заповнюе	баланс
// карти:
//
//
//     cardЗ.putCredits(150);
//
// takeCredits. Ця функцiя отримуе певну кiлькiсть грошей i вiднiмае цi кошти з баланса карти (протилежний за дiею вiд метода putCredits):
//
// cardЗ.takeCredits(100);
// Ви можете брати кошти з картки, якщо лiмiт транзакцiй та залишок коштiв перевищують кiлькiсть	коштiв, якi ви бажаете взяти. Яктт о нi, то слiд записати вiдповiдне повiдомлення у консолi	(скористайтеся console.eпor)
//
// setТransactionLimit.Ця функцiя приймае як аргумент число i встановлюе його як л м1т транзакцш на картц1
//
// cardЗ.setTransactionLimit(5000);
//
// transferCredits.
//     Ця функцiя отримуе два аргументи - кiлькiсть кредитiв, якi потрiбно передати, та карту одержувача	(iнший об'ект, створений функцiею 'userCard' - cardl):
//
// cardЗ.transferCredits(50, card1);
//
// Кошти, якi ви хочете передати, повиннi обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевiрити залишок балансу та лiмiт транзакцiй	вiдправника кредитiв (cardЗ).
const card3 = userCard(3);
/*card3.putCredits(150);
card3.setTransactionLimit(110);
card3.takeCredits(110);*/
console.log('card3', card3.getCardOptions());
const card1 = userCard(1);
console.log('card1',card1.getCardOptions());
card3.transferCredits(50, card1);
console.log('card3',card3.getCardOptions());
console.log('card1',card1.getCardOptions());