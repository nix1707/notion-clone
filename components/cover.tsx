"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import { useCoverImage } from "@/hooks/useCoverImage";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

const Cover = ({ url, preview }: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);
  const params = useParams();

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({ url: url });
    }
    removeCoverImage({ id: params.documentId as Id<"documents"> });
  };

  return (
    <div
      className={cn(
        "relative w-ful h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {!!url && <Image src={url} fill alt="Cover" className="object-cover" />}
      {url && !preview && (
        <div
          className="opacity-0 group-hover:opacity-100 
        absolute bottom-5 right-5 flex items-center gap-x-2"
        >
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={() => coverImage.onReplace(url)}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={onRemove}
          >
            <XIcon className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;
