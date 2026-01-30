import { useState } from "react";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/shadcdn/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/shadcdn/ui/dialog";
import { Label } from "@/components/shadcdn/ui/label";
import { Input } from "@/components/shadcdn/ui/input";
import { Link } from "react-router";

import "./TokenPopup.css";

interface TokenPopupProps {
    token: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function TokenPopup({ token, open, onOpenChange }: TokenPopupProps) {
    const [copied, setCopied] = useState(false);
    const [view, setView] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleView = () => {
        setView((view) => !view);
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] token-popup">
                <DialogHeader>
                    <DialogTitle>Your token</DialogTitle>
                    <DialogDescription>
                        Here is your token. Copy it and keep it safe. You won't be able to see it again.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="token">Token</Label>
                        <div className="flex gap-2">
                            <Input
                                id="token"
                                type={view ? "text" : "password"}
                                readOnly
                                value={token}
                                className="font-mono text-sm bg-muted"
                            />
                            <Button size="icon" variant="outline" onClick={handleView}>
                                {view ? <EyeOff /> : <Eye />}
                            </Button>
                            <Button size="icon" variant="outline" onClick={handleCopy}>
                                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Link to="/back-office/dashboard/api-key/list">
                        <Button onClick={() => onOpenChange(false)} className="button-finish">
                            I've saved it
                        </Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}