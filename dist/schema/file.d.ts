import { z } from "zod";
export declare const fileSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    filename: z.ZodString;
    originalName: z.ZodString;
    mimeType: z.ZodString;
    size: z.ZodNumber;
    filePath: z.ZodString;
    fileContent: z.ZodAny;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
    filePath: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fileContent?: any;
}, {
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
    filePath: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fileContent?: any;
}>;
export type File = z.infer<typeof fileSchema>;
//# sourceMappingURL=file.d.ts.map