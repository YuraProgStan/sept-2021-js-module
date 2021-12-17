//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


//Callback
const wakeUp1 = function (){
    setTimeout(() => {
        console.log('wakeUp');
            setTimeout(() => {
                console.log('haveBreakfast');
                setTimeout(() => {
                    console.log('takeShower');
                    setTimeout(() => {
                        console.log('driveWork');
                        setTimeout(() => {
                            console.log('workFirst');
                            setTimeout(() => {
                                console.log('haveLunch');
                                setTimeout(() => {
                                    console.log('workSecond');
                                    setTimeout(() => {
                                        console.log('driveHome');
                                    }, 500);
                                    setTimeout(() => {
                                        console.log('doHomework');
                                        setTimeout(() => {
                                            console.log('lessonJS');
                                        }, 800);
                                    }, 400);
                                }, 1000);
                            }, 200);
                        }, 1000);
                    }, 200);
                }, 100);
            }, 200);
    }, 300);

};
wakeUp1();


//Promise
/*const wakeUp =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('wakeUp');
        }, 300);
    });
const haveBreakfast =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('haveBreakfast');
        }, 200);
    });
const takeShower =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('takeShower');
        }, 100);
    });
const driveWork = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('driveWork');
        }, 200);
    });
const workFirst = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workFirst');
        }, 1000);
    });
const haveLunch = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('haveLunch');
        }, 200);
    });
const workSecond =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workSecond');
        }, 1000);
    });
const driveHome = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('driveHome');
        }, 500);
    });
const doHomework = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('doHomework');
        }, 400);
    });
const lessonJS = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lessonJS');
        }, 800);
    });


wakeUp
    .then(
        result => {
            console.log(result);
            return haveBreakfast;
        }
    )
    .then(
        result => {
            console.log(result);
            return takeShower;
        }
    )
    .then(
        result => {
            console.log(result);
            return driveWork;
        }
    )
    .then(
        result => {
            console.log(result);
            return workFirst;
        }
    )
    .then(
        result => {
            console.log(result);
            return haveLunch;
        }
    )
    .then(
        result => {
            console.log(result);
            return workSecond;
        }
    )
    .then(
        result => {
            console.log(result);
            return driveHome;
        }
    )
    .then(
        result => {
            console.log(result);
            return doHomework;
        }
    )
    .then(
        result => {
            console.log(result);
            return lessonJS;
        }
    )
    .then(
        result => {
            console.log(result);
        }
    )
    .catch(e => {
            console.error(e);
        }
    )
    .finally(
        () => {
            console.log('final');
            day();
        }
    )

//async await
async function day() {
    try{
    let rez1 = await wakeUp;
    let rez2 = await haveBreakfast;
    let rez3 = await takeShower;
    let rez4 = await driveWork;
    let rez5 = await workFirst;
    let rez6 = await haveLunch;
    let rez7 = await workSecond;
    let rez8 = await driveHome;
    let rez9 = await doHomework;
    let rez10 = await lessonJS;
    return console.log(rez1, rez2, rez3, rez4, rez5, rez6, rez7, rez8, rez9, rez10);
    } catch (e) {
         console.error(e);
     }
}*/


