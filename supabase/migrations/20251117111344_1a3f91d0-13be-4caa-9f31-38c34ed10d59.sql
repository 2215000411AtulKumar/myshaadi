-- Add DELETE policy to profiles table for GDPR compliance
-- Allow users to delete their own profile data
CREATE POLICY "Users can delete own profile"
ON public.profiles
FOR DELETE
TO authenticated
USING (auth.uid() = id);