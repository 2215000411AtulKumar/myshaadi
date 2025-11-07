import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";

const ProfileUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    dob: "",
    religion: "",
    bio: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) throw error;
      
      if (!user) {
        navigate("/");
        return;
      }

      setUser(user);
      const metadata = user.user_metadata || {};
      setFormData({
        full_name: metadata.full_name || "",
        mobile_number: metadata.mobile_number || "",
        dob: metadata.dob || "",
        religion: metadata.religion || "",
        bio: metadata.bio || "",
      });
      setPreviewImage(metadata.profile_picture || "");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let profilePictureUrl = user?.user_metadata?.profile_picture || "";

      // Upload new profile picture if one was selected
      if (profileImage) {
        const fileExt = profileImage.name.split(".").pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("profile-pictures")
          .upload(fileName, profileImage, {
            upsert: true,
          });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("profile-pictures")
          .getPublicUrl(fileName);

        profilePictureUrl = publicUrl;
      }

      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          ...formData,
          profile_picture: profilePictureUrl,
        },
      });

      if (updateError) throw updateError;

      toast({
        title: "Success!",
        description: "Profile updated successfully",
      });

      navigate("/profile");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name?: string) => {
    if (!name) return "U";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">Edit Profile</CardTitle>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                        <AvatarImage src={previewImage} alt="Profile" />
                        <AvatarFallback className="text-3xl bg-primary/10 text-primary">
                          {getInitials(formData.full_name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <Label htmlFor="profile-picture" className="cursor-pointer">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                          <Upload className="h-4 w-4" />
                          <span className="text-sm font-medium">Upload Photo</span>
                        </div>
                        <Input
                          id="profile-picture"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </Label>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) =>
                            setFormData({ ...formData, full_name: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mobile_number">Phone Number</Label>
                        <Input
                          id="mobile_number"
                          type="tel"
                          value={formData.mobile_number}
                          onChange={(e) =>
                            setFormData({ ...formData, mobile_number: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={(e) =>
                            setFormData({ ...formData, dob: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="religion">Religion</Label>
                        <Input
                          id="religion"
                          value={formData.religion}
                          onChange={(e) =>
                            setFormData({ ...formData, religion: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          value={formData.bio}
                          onChange={(e) =>
                            setFormData({ ...formData, bio: e.target.value })
                          }
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate("/profile")}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={loading} className="flex-1">
                        {loading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileUpdate;
