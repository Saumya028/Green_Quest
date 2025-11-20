"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import { Loader2, X } from "lucide-react";
// import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
      <Card className="z-50 rounded-md rounded-t-none max-w-md">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Account creation is handled by your provider. Please use Google or GitHub sign-in on the login page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              className="w-full"
              onClick={() => window.location.href = "/sign-in"}
            >
              Go to Sign In
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-center w-full border-t py-4">
            <p className="text-center text-xs text-neutral-500">
              Secured by <span className="text-green-400">next-auth</span>.
            </p>
          </div>
        </CardFooter>
      </Card>
    );
}

async function convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
