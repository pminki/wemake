import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import { DialogFooter, DialogHeader, DialogContent, DialogDescription, DialogTitle} from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";


export default function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, sethoveredStar] = useState<number | null>(0);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>What do you think about this portfoli?</DialogTitle>
        <DialogDescription>
          Share your thoughts and experiences with this product.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Rating
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-3 mt-3">
            {[1, 2, 3, 4 ,5].map(star => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => sethoveredStar(star)}
                onMouseLeave={() => sethoveredStar(null)}
              >
                <StarIcon
                  className="size-4 text-yellow-400"
                  fill={
                    (hoveredStar && hoveredStar >= star) || rating >= star
                      ? 'currentColor'
                      : 'none'
                  }
                />
                <input 
                  type="radio"
                  name="rating"
                  required
                  value={star}
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          textArea
          label="Share your thought and also add your portfolio also!"
          description="Max 1000 characters"
          placeholder="Share your thought and also add your portfolio also!"
        />
        <DialogFooter>
          <Button type="submit">Submit your thoughts!</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}