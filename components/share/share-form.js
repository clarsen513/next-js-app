"use client";

import { shareMeal } from "@/lib/actions";
import { useActionState } from "react";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareForm({ classes }) {
  const [formState, formAction] = useActionState(shareMeal, { message: null });
  return (
    // <p>test</p>
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker name="image" label="Pick an Image" />
      {formState.message && <p>{formState.message}</p>}
      <p className={classes.actions}>
        <MealsFormSubmit />
      </p>
    </form>
  );
}
