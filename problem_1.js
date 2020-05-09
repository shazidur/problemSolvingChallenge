// কোনো একটি পূর্ণসংখ্যা দেওয়া থাকলে সেটি জোড় না বিজোড় তা বের করতে হবে।

// ইনপুট
// প্রথম লাইনে একটি সংখ্যা T (1<=T<=100) দেওয়া থাকবে। পরবর্তীতে T এর মান যত, ততটি লাইন থাকবে। প্রতিটি লাইনে একটি করে পূর্ণসংখ্যা n (0<=n<=2147483647) দেওয়া থাকবে।

// আউটপুট
// প্রতিটি পূর্ণসংখ্যার জন্য, সংখ্যাটি জোড় হলে even আর বিজোড় হলে odd কথাটি প্রিন্ট করতে হবে।

// ------------------------------------------------------------------------------------------------------------------------

// Coder Name: Shazidur Rahman

let inputNumber = prompt(" Please input your number here :");

typeOfNUmber(inputNumber);

function typeOfNUmber(number) {
  if (number % 2 == 0) {
    alert(`your number is ${number} and it is an Even number.. `);
  } else {
    alert(`your number is ${number} and it is an Odd number.. yaa hoo `);
  }
}

// Coder Name:

// Coder Name:
