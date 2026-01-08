import { z } from 'zod';
export declare const ticketSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["OPEN", "INPROGRESS", "PENDING", "RESOLVED"]>;
    priority: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
    customerId: z.ZodNumber;
    assigneeId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status: "OPEN" | "INPROGRESS" | "PENDING" | "RESOLVED";
    description: string | null;
    title: string;
    priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    customerId: number;
    assigneeId: number;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status: "OPEN" | "INPROGRESS" | "PENDING" | "RESOLVED";
    description: string | null;
    title: string;
    priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    customerId: number;
    assigneeId: number;
}>;
export type Ticket = z.infer<typeof ticketSchema>;
//# sourceMappingURL=tickets.d.ts.map