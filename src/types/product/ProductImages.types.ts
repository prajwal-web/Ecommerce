export type TProductImage = {
  bucketId: string;
  versionId: string;
  fileName: string;
  extension: string;
};

export type TProductImages = Record<string, TProductImage[]>;
