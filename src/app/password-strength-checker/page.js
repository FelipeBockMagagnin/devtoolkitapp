import PasswordStrengthChecker from "@/components/password-strength-checker";

export const metadata = {
    title: 'Password Strength Checker - Dev Toolkit',
    description: 'Check your passwords security! Estimate cracking time with our Free Password Strength Analyzer. Stay protected online!',
}

export default function Page() {
    return <PasswordStrengthChecker/>
}