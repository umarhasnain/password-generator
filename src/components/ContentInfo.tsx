// app/password-generator/page.tsx
"use client";

import { motion } from "framer-motion";


const sections = [
  {
    title: "Password Generator Is Your First Step Towards Stronger Security",
    content:
      "Your password is the first step in protecting your online footprint. Weak passwords, such as 123456 or password, are easily hacked. Our password generator averts those cases by creating unique combinations of letters, numbers, and symbols. You can set it to the length that you need, whether it is a password generator of 12 characters for standard accounts or 15 characters for extra protection. It even provides an option like a password generator 8 characters for simple entries, or maybe the 16-character password generator for the very high-security needs. This tool is made to suit any situation. It boosts your defenses with minimum disruption and simplicity.",
  },
  {
    title: "Random Password Generator",
    content:
      "Password strength begins with the element of guessability. If nobody can guess it, it is a good password. That is why our random password generator functions unpredictably every time it is used. The password generated will contain unpredictable strings rather than familiar words or dates; for example, something like \"P7$kL!v9mQ2j\". This type of password is impossible to crack.",
  },
  {
    title: "Password Generator Free High-Quality Security for Free",
    content:
      "We want to make security accessible to everybody. There is no trick or gimmick, just a reliable password generator to help you secure your accounts, either a password generator for 8 characters or something longer and more complex.",
  },
  {
    title: "Strong Password Generator for Maximum Protection",
    content:
      "A strong password is a fortress of security against cyber threats, not just a jumble of random string characters. With our strong password generator, you can create your passwords using uppercase letters, lowercase letters, numbers, and special characters, such as “9#vK$mP!xQ2jL.” It is this complexity that makes it almost impossible for hackers to break in. Our tool will guarantee that your passwords are ultra-tough, whether you go with the generator 15 characters long or one that is a shorter length.",
  },
  {
    title: "Secure Password Generator for Privacy and Safety Combined",
    content:
      "Security is only a half measure if it does not help to give peace of mind. Our secure password generator instantly generates passwords without storing or sharing any of your data. That means your password is unique and private to everyone. Whether for the password generator web-based quick password generator 8 characters or your 16 character password generator for those ultra-high security level passwords, our system has been put in place to protect your privacy. It's simple, safe, and straightforward for putting a lock on your accounts.",
  },
  {
    title: "Free Password Generator for Everyone",
    content:
      "This free password generator is quite user-friendly and lightning-speed: generate passwords in seconds. Need a password generator of 12 characters for your social media? Done. Want 15 characters for online banking? No problem.",
  },
  {
    title: "Get Effective Security from Password Generator 8 Characters",
    content:
      "An 8-character password is often the minimum requirement for many online platforms, but it’s also the baseline for security. RandomPasswordGeneratorFree.com creates 8-character passwords combining uppercase letters, lowercase letters, numbers, and special symbols, maximizing complexity within this length. An 8-character password using a 95-character set yields about 52.6 bits of entropy, offering decent protection for low-risk accounts. However, with modern computing power, such passwords can be vulnerable to brute-force attacks in minutes. This option is ideal for temporary or less sensitive accounts, but for stronger security, consider longer passwords available on the site.",
  },
  {
    title: "Balanced Strength for Everyday Use from Password Generator 12 Characters",
    content:
      "For most online accounts, a 12-character password strikes an excellent balance between usability and security. RandomPasswordGeneratorFree.com generates these passwords with high randomness, incorporating diverse character types to ensure robustness. With approximately 77.9 bits of entropy, a 12-character password is exponentially harder to crack than its 8-character counterpart, potentially taking years to break with current technology. This length is perfect for social media, email, or e-commerce accounts, providing peace of mind without being overly complex to manage. The tool’s intuitive interface lets you create these passwords instantly, tailored to your preferences.",
  },
  {
    title: "Protection for Sensitive Data from Password Generator 15 Characters",
    content:
      "When it comes to sensitive accounts like banking or personal cloud storage, a 15-character password offers superior protection. RandomPasswordGeneratorFree.com creates these passwords with advanced randomization, ensuring no predictable patterns. With around 97.4 bits of entropy, a 15-character password is virtually impervious to brute-force attacks, potentially taking decades to crack. This length is recommended by cybersecurity experts for high-stakes accounts where a breach could have serious consequences. The platform allows customization, letting you include special characters or numbers, making your password both secure and compliant with stringent website requirements.",
  },
  {
    title: "Use Ultimate Defense for Critical Accounts from 16 Character Password Generator",
    content:
      "For the highest level of security, RandomPasswordGeneratorFree.com’s 16-character password generator is unmatched. These passwords are for critical applications like financial accounts or primary email addresses. The sheer number of possible combinations makes them nearly impossible to crack, with cracking times extending beyond the age of the universe using today’s technology. This tool ensures true randomness, likely using algorithms akin to industry leaders, and generates passwords on your device for maximum privacy. Choose this option for big protection against even the most determined cybercriminals.",
  },
  {
    title: "Online Password Generator: Anytime, Anywhere Access",
    content:
      "Convenience matters, and our online password generator will do just that. No software to install. Just come by any device and go to RandomPasswordGeneratorFree.com and get passwords. If you want \"Cloud$Rain22\" or a completely random string from our strong random password generator, it's all at your fingertips.",
  },
  {
    title: "Random Password Generator Free",
    content:
      "Our completely free random password generator combines all the elements that matter: strength, variety, and ease of use. If you want to generate a password generator of eight characters for a low-risk login or a 16-character password generator, you can find everything you need for free right here. Security should be simple and accessible to everyone, and that's precisely what we thought while offering a strong random password generator free of cost, equal to premium ones, because it keeps our digital life safe without spending a penny in the bank.",
  },
  {
    title: "10 Most Common Passwords Used",
    content:
      "123456\n123456789\nPassword\n12345\nqwerty\n12345678\n111111\n123123\n1234567890\nadmin",
  },
  {
    title: "Why These Passwords Are Used and How They Fail",
    content:
      "These passwords rule because they are short, easily remembered, and easy to type, all characteristics that the average account user with many accounts wants. Hackers target these first because of their popularity. An example of weak passwords is sequential numbers, keyboard patterns, or even real words such as \"password\" and \"admin\"; these can oftentimes be cracked instantly via brute-force or dictionary attacks. One compromised password will lead to identity theft, financial loss, and data leaks, especially with cross-site reuse - this habit persists, even if people are warned. As a result of these increasing cyber threats, these passwords seem comparable to leaving the door of one's house wide open. The solution? Long, random combinations such as 12-16 characters that use letters, numbers, and symbols will fully secure your accounts.",
  },
  {
    title: "Best Password Generator: Why We’re Your Top Choice",
    content:
      "What makes RandomPasswordGeneratorFree.com truly the finest password generator out there? Well, it is our dedication towards the cause of quality and variability. We go the entire nine yards in terms of a password generator 12 characters all the way through a password generator 15 characters, ensuring that you get exactly what you're after. Our easy to remember password generator generator creates passwords such as \"Tree$Leaf88\" for a while and then hits you with a strong password generator random that truly leaves you with a string of numbers and letters that even you cannot guess. Providing a fast, secure, and free password generator online comes handy for either a beginner or an advanced computer user. With RandomPasswordGeneratorFree.com, you are truly your own master. Customize your passwords according to what you need, and rest easy knowing that your accounts are well-protected.",
  },
  {
    title: "Try Our Password Generator for Free",
    content:
      "Passwords are your first line of defense in the digital world, and we're here to help you make them as strong as possible. RandomPasswordGeneratorFree.com provides the best password generator experience- free, fast, and reliable. So, it doesn't matter if you need a memorable password generator with 12 characters for that new account or a strong random password generator words for top security, we have you covered. Go on, give our service a try. Generate a password, secure your accounts, and experience the confidence that comes from knowing you are covered. With RandomPasswordGeneratorFree.com, better security is always just a click away.",
  },
];

export default function PasswordGeneratorPage() {
  return (
   <div className="overflow-x-hidden">
     <main className="bg-gradient-to-br from-slate-50 text-white py-16 px-4 sm:px-10 max-w-7xl mx-auto space-y-16">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text"
      >
        Welcome to RandomPasswordGeneratorFree.com
      </motion.h1>

      {sections.map((section, index) =>{
         const isCommonPasswords = section.title === "10 Most Common Passwords Used";
        return  (
          <motion.section
            key={index}
            className={`rounded-2xl shadow-xl p-6 sm:p-8 space-y-4 border  hover:shadow-2xl transition duration-300 cursor-pointer
              ${isCommonPasswords
                ? "bg-blue-100 border-blue-400 ring-2 ring-blue-500"
                : "bg-white border-blue-800"}
            `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-500">
              {section.title}
            </h2>
            <p className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
              {section.content}
            </p>
          </motion.section>
        )
      }
      )}
    </main>
   </div>
  );
}
