var chalk = require('chalk');
var readlineSync = require('readline-sync')

var high_score = [{player_name:'Ansh', player_score:3},
{player_name:'Arushi', player_score:4},
{player_name:'Pranit', player_score:4}]

function update_high_score(p_score)
{   var flag=0;
    for(var i=0; i<high_score.length; i++)
    {   
        if(p_score>=high_score[i].player_score)
        {
            flag=1;
        }
    }
    if(flag==1)
    {
        console.log(chalk.green('\n CONGRATULATIONS! You are eligible to get your name listed on the leaderboard! To do the same, send me a screenshot of your score at abc@gmail.com'))
    }
}

function game() 
{   do
    {
    console.log(chalk.blue.underline.bold('WELCOME TO Ansh"s quiz on the ANIME HAIYKUU. \n'))

    console.log(chalk.red('IMPORTANT: 1. Each correct answer, gives a +1 and there is NO negative marking.\n 2. Only choose the correct option, DO NOT type the answer.\n 3. If you play again, your score would be set to ZERO.\n -----Let"s begin.-----\n '))

    var name = readlineSync.question('\n What is your name?\n')

    var questions = [

        { question: 'What team does the anime focus the most on? \n a:Karasume \n b:Nekoma \n c:Shiratorizawa', answer: 'a' },

        { question: 'Who is Shiratorizawa"s best spiker? \n a:Hinata \n b:Ushijima \n c:Yu chan', answer: 'b' },

        { question: 'Who is Karasume"s best setter?\n a:Kageyama \n b:Daichi \n c:Sugawara', answer: 'a' },

        { question: 'Who is Karasume"s arch nemesis?\n a:Sujakuna High \n b:Shiratorizawa \n c:Nekoma', answer: 'c' }

    ]
    var score = 0;
    for (var i = 0; i < questions.length; i++)
    {
        console.log('Q' + (i + 1) + ': ' + questions[i].question + '\n')

        var answer = readlineSync.question('Enter your answer: ')
        console.log('You selected ' + answer)
        if (questions[i].answer == answer)
        {
            console.log('Woahh!! That"s correct. You get a +1.\n')
            score+= 1;

            if(i==questions.length-1 || i==questions.length-3)
            {
                console.log(chalk.red.underline('\n Woww! You a cleared level 2 question.\n'))
            }
        }

        else
        {
            console.log('Sorry that"s the wrong answer. \n The correct answer is: ' + questions[i].answer+'\n')
        }
    
        
        
    }
    
    console.log(chalk.green('\n\nThe quiz has ended! \n '+ name + ', your score is: ' + score))
    }

    while (readlineSync.keyInYN('\nDo you want to play again?'));

    update_high_score(score)
    console.log('\n Current leaderboard:')

    console.log('PLAYERS' + '  ' +'SCORES')

    for(var i=0 ;i<high_score.length; i++)
    {
        console.log(high_score[i].player_name +'  '+ high_score[i].player_score)
    }

}


game()
