//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


//Callback
/*const wakeUp1 = function (){
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
wakeUp1();*/

/*const wakeUp = function (isWorking, callback) {
    setTimeout(() => {
        if (isWorking) {
            callback(null, `Wake up is ${isWorking}`);
            return;
        }
        callback('I want to sleep more');
    }, 300)
}
const haveBreakfast = function (isWorking, callback) {
    setTimeout(() => {
        if (isWorking) {
            callback(null, `Have breakfast is ${isWorking}`);
            return;
        }
        callback(`I don't want to eat`)
    }, 200)
}
const takeShower = function (isSweeming, callback) {
    setTimeout(() => {
        if (isSweeming) {
            callback(null, `Take a shower ${isSweeming} `);
            return;
        }
        callback("I don't want to take a shower")
    }, 500)
}

const driveWork = function (isDriving, callback) {
    setTimeout(() => {
        if (isDriving) {
            callback(null, `Driving to job ${isDriving} `);
            return;
        }
        callback("Seat at home")
    }, 200)
}
const workFirst = function (callback) {
    setTimeout(() => {
        callback(null, `Working first`);
        return;
    }, 200)
}
const haveLunch = function (isEating, callback) {
    setTimeout(() => {
        if (isEating) {
            callback(null, `Have breakfast is ${isEating}`);
            return;
        }
        callback(`I don't want to eat`)
    }, 200)
}
const workSecond = function (callback) {
    setTimeout(() => {
        callback(null, `Working second`);
        return;
    }, 200)
}
const driveHome = function (isDriving,callback) {
    setTimeout(() => {
        if (isDriving) {
            callback(null, `I'm driving at home ${isDriving}`);
            return;
        }
        callback(`I don't want to eat`)
    }, 200)
}
const doHomework = function (isDoing,callback) {
    setTimeout(() => {
        if (isDoing) {
            callback(null, `I'm doing my home ${isDoing}`);
            return;
        }
        callback(`I don't want to do nothing`)
    }, 400)
}
const lessonJS = function (isStuding,callback) {
    setTimeout(() => {
        if (isStuding) {
            callback(null, `I'm studing ${isStuding}`);
            return;
        }
        callback(`I don't want to studing`)
    }, 500)
}*/
/*wakeUp(true, (err, morning) => {
    if (err) {
        console.error('OOOPs', err);
        return;
    }
    console.log(morning);

    haveBreakfast(true, (err, eating) => {
        if (err) {
            console.error('OOOPs', err);
            return;
        }
        console.log(eating);

        takeShower(true,(err, sweem) => {
            if (err) {
                console.error('OOOPs', err);
                return;
            }
            console.log(sweem);

            driveWork(true,(err, drive) => {
                if (err) {
                    console.error('OOOPs', err);
                    return;
                }
                console.log(drive);

                workFirst((err, work) => {
                    if (err) {
                        console.error('OOOPs', err);
                        return;
                    }
                    console.log(work);

                    haveLunch(true, (err, eat) => {
                        if (err) {
                            console.error('OOOPs', err);
                            return;
                        }
                        console.log(eat);

                        workSecond((err, work) => {
                            if (err) {
                                console.error('OOOPs', err);
                                return;
                            }
                            console.log(work);

                            driveHome(true, (err, drive) => {
                                if (err) {
                                    console.error('OOOPs', err);
                                    return;
                                }
                                console.log(drive);

                                doHomework(true, (err, homework) => {
                                    if (err) {
                                        console.error('OOOPs', err);
                                        return;
                                    }
                                    console.log(homework);

                                    lessonJS(true, (err, lesson) => {
                                        if (err) {
                                            console.error('OOOPs', err);
                                            return;
                                        }
                                        console.log(lesson);
                                        console.log('finish');
                                    })
                                })
                            })

                        })
                    })
                })
            })
        })
    })
})*/

//Promise
const wakeUp = function (wakingUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakingUp) {
                resolve('wakeUp');
            }
            reject("I want to sleep")
        }, 300);
    });
}
const haveBreakfast = function (isEating) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isEating) {
                resolve('haveBreakfast');
            }
            reject("I don't want to eat")
        }, 200);
    });
}
const takeShower = function (isWashing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWashing) {
                resolve('takeShower');
            }
            reject("I don't want to take a shower")
        }, 100);
    });
}
const driveWork = function (isDriving) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDriving) {
                resolve('driveWork');
            }
            reject("Don't driving")
        }, 200);
    });
}
const workFirst = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workFirst');
        }, 1000);
    });
}
const haveLunch = function (isEating) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isEating) {
                resolve('haveLunch');
            }
            reject("I don't want to eat")
        }, 200);
    });
}
const workSecond = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workSecond');
        }, 1000);
    });
}
const driveHome = function (isDriving) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDriving) {
                resolve('driveHome');
            }
            reject('Go to bar')
        }, 500);
    });
}
const doHomework = function (isDoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDoing) {
                resolve('doHomework');
            }
            reject("I don't want to do my homework")
        }, 400);
    });
}
const lessonJS = function (isStuding) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isStuding) {
                resolve('lessonJS');
            }
            reject("I don't want to studing")
        }, 800);
    });
}


wakeUp(true)
    .then(
        result => {
            console.log(result);
            return haveBreakfast("Casha");
        }
    )
    .then(
        result => {
            console.log(result);
            return takeShower(true)/*.catch(()=>{}); - позволим продолджить выполнение promise при значении false*/
        }
    )
    .then(
        result => {
            console.log(result);
            return driveWork(true);
        }
    )
    .then(
        result => {
            console.log(result);
            return workFirst();
        }
    )
    .then(
        result => {
            console.log(result);
            return haveLunch('soup');
        }
    )
    .then(
        result => {
            console.log(result);
            return workSecond();
        }
    )
    .then(
        result => {
            console.log(result);
            return driveHome(true);
        }
    )
    .then(
        result => {
            console.log(result);
            return doHomework('Additional');
        }
    )
    .then(
        result => {
            console.log(result);
            return lessonJS ('From Serg');
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
    try {
        let rez1 = await wakeUp(true);
        console.log(rez1);
        let rez2 = await haveBreakfast('Casha');
        console.log(rez2);
        let rez3 = await takeShower(true);
        console.log(rez3);
        let rez4 = await driveWork(true);
        console.log(rez4);
        let rez5 = await workFirst();
        console.log(rez5);
        let rez6 = await haveLunch('borsh');
        console.log(rez6);
        let rez7 = await workSecond();
        console.log(rez7);
        let rez8 = await driveHome(true);
        console.log(rez8);
        let rez9 = await doHomework("Additional");
        console.log(rez9);
        let rez10 = await lessonJS("From Serg");
        console.log(rez10);
        return;
        // return console.log(rez1, rez2, rez3, rez4, rez5, rez6, rez7, rez8, rez9, rez10);
    } catch (e) {
        console.error(e);
    }
}


