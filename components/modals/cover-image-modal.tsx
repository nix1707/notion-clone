"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCoverImage } from "@/hooks/useCoverImage";
import { SingleImageDropzone } from "@/components//upload/single-image";
import { useCallback } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { UploaderProvider, UploadFn } from "../upload/uploader-provider";
import { useParams } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const CoverImageModal = () => {
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const update = useMutation(api.documents.update);

  const uploadFn: UploadFn = useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });
      coverImage.onClose();
      return res;
    },
    [edgestore, params.documentId, update, coverImage],
  );

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Cover Image
          </DialogTitle>
        </DialogHeader>
        <UploaderProvider uploadFn={uploadFn} autoUpload>
          <SingleImageDropzone
            height={200}
            width={420}
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 1, // 1 MB
            }}
          />
        </UploaderProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
