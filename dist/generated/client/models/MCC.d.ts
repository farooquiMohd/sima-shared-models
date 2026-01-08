import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MCC
 *
 */
export type MCCModel = runtime.Types.Result.DefaultSelection<Prisma.$MCCPayload>;
export type AggregateMCC = {
    _count: MCCCountAggregateOutputType | null;
    _avg: MCCAvgAggregateOutputType | null;
    _sum: MCCSumAggregateOutputType | null;
    _min: MCCMinAggregateOutputType | null;
    _max: MCCMaxAggregateOutputType | null;
};
export type MCCAvgAggregateOutputType = {
    id: number | null;
    stateId: number | null;
    districtId: number | null;
    tehsilId: number | null;
    villageId: number | null;
};
export type MCCSumAggregateOutputType = {
    id: number | null;
    stateId: number | null;
    districtId: number | null;
    tehsilId: number | null;
    villageId: number | null;
};
export type MCCMinAggregateOutputType = {
    id: number | null;
    mccName: string | null;
    mccCode: string | null;
    status: $Enums.Status | null;
    stateId: number | null;
    districtId: number | null;
    tehsilId: number | null;
    villageId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MCCMaxAggregateOutputType = {
    id: number | null;
    mccName: string | null;
    mccCode: string | null;
    status: $Enums.Status | null;
    stateId: number | null;
    districtId: number | null;
    tehsilId: number | null;
    villageId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MCCCountAggregateOutputType = {
    id: number;
    mccName: number;
    mccCode: number;
    status: number;
    stateId: number;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MCCAvgAggregateInputType = {
    id?: true;
    stateId?: true;
    districtId?: true;
    tehsilId?: true;
    villageId?: true;
};
export type MCCSumAggregateInputType = {
    id?: true;
    stateId?: true;
    districtId?: true;
    tehsilId?: true;
    villageId?: true;
};
export type MCCMinAggregateInputType = {
    id?: true;
    mccName?: true;
    mccCode?: true;
    status?: true;
    stateId?: true;
    districtId?: true;
    tehsilId?: true;
    villageId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MCCMaxAggregateInputType = {
    id?: true;
    mccName?: true;
    mccCode?: true;
    status?: true;
    stateId?: true;
    districtId?: true;
    tehsilId?: true;
    villageId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MCCCountAggregateInputType = {
    id?: true;
    mccName?: true;
    mccCode?: true;
    status?: true;
    stateId?: true;
    districtId?: true;
    tehsilId?: true;
    villageId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MCCAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MCC to aggregate.
     */
    where?: Prisma.MCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MCCS to fetch.
     */
    orderBy?: Prisma.MCCOrderByWithRelationInput | Prisma.MCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MCCS
    **/
    _count?: true | MCCCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MCCAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MCCSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MCCMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MCCMaxAggregateInputType;
};
export type GetMCCAggregateType<T extends MCCAggregateArgs> = {
    [P in keyof T & keyof AggregateMCC]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMCC[P]> : Prisma.GetScalarType<T[P], AggregateMCC[P]>;
};
export type MCCGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MCCWhereInput;
    orderBy?: Prisma.MCCOrderByWithAggregationInput | Prisma.MCCOrderByWithAggregationInput[];
    by: Prisma.MCCScalarFieldEnum[] | Prisma.MCCScalarFieldEnum;
    having?: Prisma.MCCScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MCCCountAggregateInputType | true;
    _avg?: MCCAvgAggregateInputType;
    _sum?: MCCSumAggregateInputType;
    _min?: MCCMinAggregateInputType;
    _max?: MCCMaxAggregateInputType;
};
export type MCCGroupByOutputType = {
    id: number;
    mccName: string;
    mccCode: string;
    status: $Enums.Status;
    stateId: number;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: MCCCountAggregateOutputType | null;
    _avg: MCCAvgAggregateOutputType | null;
    _sum: MCCSumAggregateOutputType | null;
    _min: MCCMinAggregateOutputType | null;
    _max: MCCMaxAggregateOutputType | null;
};
type GetMCCGroupByPayload<T extends MCCGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MCCGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MCCGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MCCGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MCCGroupByOutputType[P]>;
}>>;
export type MCCWhereInput = {
    AND?: Prisma.MCCWhereInput | Prisma.MCCWhereInput[];
    OR?: Prisma.MCCWhereInput[];
    NOT?: Prisma.MCCWhereInput | Prisma.MCCWhereInput[];
    id?: Prisma.IntFilter<"MCC"> | number;
    mccName?: Prisma.StringFilter<"MCC"> | string;
    mccCode?: Prisma.StringFilter<"MCC"> | string;
    status?: Prisma.EnumStatusFilter<"MCC"> | $Enums.Status;
    stateId?: Prisma.IntFilter<"MCC"> | number;
    districtId?: Prisma.IntFilter<"MCC"> | number;
    tehsilId?: Prisma.IntFilter<"MCC"> | number;
    villageId?: Prisma.IntFilter<"MCC"> | number;
    createdAt?: Prisma.DateTimeFilter<"MCC"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MCC"> | Date | string;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    district?: Prisma.XOR<Prisma.DistrictScalarRelationFilter, Prisma.DistrictWhereInput>;
    tehsil?: Prisma.XOR<Prisma.TehsilScalarRelationFilter, Prisma.TehsilWhereInput>;
    village?: Prisma.XOR<Prisma.VillageScalarRelationFilter, Prisma.VillageWhereInput>;
    mpps?: Prisma.MPPListRelationFilter;
};
export type MCCOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mccName?: Prisma.SortOrder;
    mccCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    state?: Prisma.StateOrderByWithRelationInput;
    district?: Prisma.DistrictOrderByWithRelationInput;
    tehsil?: Prisma.TehsilOrderByWithRelationInput;
    village?: Prisma.VillageOrderByWithRelationInput;
    mpps?: Prisma.MPPOrderByRelationAggregateInput;
};
export type MCCWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    mccCode?: string;
    AND?: Prisma.MCCWhereInput | Prisma.MCCWhereInput[];
    OR?: Prisma.MCCWhereInput[];
    NOT?: Prisma.MCCWhereInput | Prisma.MCCWhereInput[];
    mccName?: Prisma.StringFilter<"MCC"> | string;
    status?: Prisma.EnumStatusFilter<"MCC"> | $Enums.Status;
    stateId?: Prisma.IntFilter<"MCC"> | number;
    districtId?: Prisma.IntFilter<"MCC"> | number;
    tehsilId?: Prisma.IntFilter<"MCC"> | number;
    villageId?: Prisma.IntFilter<"MCC"> | number;
    createdAt?: Prisma.DateTimeFilter<"MCC"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MCC"> | Date | string;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    district?: Prisma.XOR<Prisma.DistrictScalarRelationFilter, Prisma.DistrictWhereInput>;
    tehsil?: Prisma.XOR<Prisma.TehsilScalarRelationFilter, Prisma.TehsilWhereInput>;
    village?: Prisma.XOR<Prisma.VillageScalarRelationFilter, Prisma.VillageWhereInput>;
    mpps?: Prisma.MPPListRelationFilter;
}, "id" | "mccCode">;
export type MCCOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mccName?: Prisma.SortOrder;
    mccCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MCCCountOrderByAggregateInput;
    _avg?: Prisma.MCCAvgOrderByAggregateInput;
    _max?: Prisma.MCCMaxOrderByAggregateInput;
    _min?: Prisma.MCCMinOrderByAggregateInput;
    _sum?: Prisma.MCCSumOrderByAggregateInput;
};
export type MCCScalarWhereWithAggregatesInput = {
    AND?: Prisma.MCCScalarWhereWithAggregatesInput | Prisma.MCCScalarWhereWithAggregatesInput[];
    OR?: Prisma.MCCScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MCCScalarWhereWithAggregatesInput | Prisma.MCCScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MCC"> | number;
    mccName?: Prisma.StringWithAggregatesFilter<"MCC"> | string;
    mccCode?: Prisma.StringWithAggregatesFilter<"MCC"> | string;
    status?: Prisma.EnumStatusWithAggregatesFilter<"MCC"> | $Enums.Status;
    stateId?: Prisma.IntWithAggregatesFilter<"MCC"> | number;
    districtId?: Prisma.IntWithAggregatesFilter<"MCC"> | number;
    tehsilId?: Prisma.IntWithAggregatesFilter<"MCC"> | number;
    villageId?: Prisma.IntWithAggregatesFilter<"MCC"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MCC"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MCC"> | Date | string;
};
export type MCCCreateInput = {
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutMccsInput;
    district: Prisma.DistrictCreateNestedOneWithoutMccsInput;
    tehsil: Prisma.TehsilCreateNestedOneWithoutMccsInput;
    village: Prisma.VillageCreateNestedOneWithoutMccsInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutMccInput;
};
export type MCCUncheckedCreateInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutMccInput;
};
export type MCCUpdateInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutMccsNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutMccsNestedInput;
    tehsil?: Prisma.TehsilUpdateOneRequiredWithoutMccsNestedInput;
    village?: Prisma.VillageUpdateOneRequiredWithoutMccsNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutMccNestedInput;
};
export type MCCCreateManyInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MCCUpdateManyMutationInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MCCUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MCCListRelationFilter = {
    every?: Prisma.MCCWhereInput;
    some?: Prisma.MCCWhereInput;
    none?: Prisma.MCCWhereInput;
};
export type MCCOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MCCCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mccName?: Prisma.SortOrder;
    mccCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MCCAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
};
export type MCCMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mccName?: Prisma.SortOrder;
    mccCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MCCMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mccName?: Prisma.SortOrder;
    mccCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MCCSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    tehsilId?: Prisma.SortOrder;
    villageId?: Prisma.SortOrder;
};
export type MCCScalarRelationFilter = {
    is?: Prisma.MCCWhereInput;
    isNot?: Prisma.MCCWhereInput;
};
export type MCCCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutDistrictInput, Prisma.MCCUncheckedCreateWithoutDistrictInput> | Prisma.MCCCreateWithoutDistrictInput[] | Prisma.MCCUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutDistrictInput | Prisma.MCCCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.MCCCreateManyDistrictInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutDistrictInput, Prisma.MCCUncheckedCreateWithoutDistrictInput> | Prisma.MCCCreateWithoutDistrictInput[] | Prisma.MCCUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutDistrictInput | Prisma.MCCCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.MCCCreateManyDistrictInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutDistrictInput, Prisma.MCCUncheckedCreateWithoutDistrictInput> | Prisma.MCCCreateWithoutDistrictInput[] | Prisma.MCCUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutDistrictInput | Prisma.MCCCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutDistrictInput | Prisma.MCCUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.MCCCreateManyDistrictInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutDistrictInput | Prisma.MCCUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutDistrictInput | Prisma.MCCUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutDistrictInput, Prisma.MCCUncheckedCreateWithoutDistrictInput> | Prisma.MCCCreateWithoutDistrictInput[] | Prisma.MCCUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutDistrictInput | Prisma.MCCCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutDistrictInput | Prisma.MCCUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.MCCCreateManyDistrictInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutDistrictInput | Prisma.MCCUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutDistrictInput | Prisma.MCCUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCCreateNestedOneWithoutMppsInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutMppsInput, Prisma.MCCUncheckedCreateWithoutMppsInput>;
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutMppsInput;
    connect?: Prisma.MCCWhereUniqueInput;
};
export type MCCUpdateOneRequiredWithoutMppsNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutMppsInput, Prisma.MCCUncheckedCreateWithoutMppsInput>;
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutMppsInput;
    upsert?: Prisma.MCCUpsertWithoutMppsInput;
    connect?: Prisma.MCCWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MCCUpdateToOneWithWhereWithoutMppsInput, Prisma.MCCUpdateWithoutMppsInput>, Prisma.MCCUncheckedUpdateWithoutMppsInput>;
};
export type MCCCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutStateInput, Prisma.MCCUncheckedCreateWithoutStateInput> | Prisma.MCCCreateWithoutStateInput[] | Prisma.MCCUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutStateInput | Prisma.MCCCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.MCCCreateManyStateInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUncheckedCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutStateInput, Prisma.MCCUncheckedCreateWithoutStateInput> | Prisma.MCCCreateWithoutStateInput[] | Prisma.MCCUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutStateInput | Prisma.MCCCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.MCCCreateManyStateInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutStateInput, Prisma.MCCUncheckedCreateWithoutStateInput> | Prisma.MCCCreateWithoutStateInput[] | Prisma.MCCUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutStateInput | Prisma.MCCCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutStateInput | Prisma.MCCUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.MCCCreateManyStateInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutStateInput | Prisma.MCCUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutStateInput | Prisma.MCCUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCUncheckedUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutStateInput, Prisma.MCCUncheckedCreateWithoutStateInput> | Prisma.MCCCreateWithoutStateInput[] | Prisma.MCCUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutStateInput | Prisma.MCCCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutStateInput | Prisma.MCCUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.MCCCreateManyStateInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutStateInput | Prisma.MCCUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutStateInput | Prisma.MCCUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCCreateNestedManyWithoutTehsilInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutTehsilInput, Prisma.MCCUncheckedCreateWithoutTehsilInput> | Prisma.MCCCreateWithoutTehsilInput[] | Prisma.MCCUncheckedCreateWithoutTehsilInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutTehsilInput | Prisma.MCCCreateOrConnectWithoutTehsilInput[];
    createMany?: Prisma.MCCCreateManyTehsilInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUncheckedCreateNestedManyWithoutTehsilInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutTehsilInput, Prisma.MCCUncheckedCreateWithoutTehsilInput> | Prisma.MCCCreateWithoutTehsilInput[] | Prisma.MCCUncheckedCreateWithoutTehsilInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutTehsilInput | Prisma.MCCCreateOrConnectWithoutTehsilInput[];
    createMany?: Prisma.MCCCreateManyTehsilInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUpdateManyWithoutTehsilNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutTehsilInput, Prisma.MCCUncheckedCreateWithoutTehsilInput> | Prisma.MCCCreateWithoutTehsilInput[] | Prisma.MCCUncheckedCreateWithoutTehsilInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutTehsilInput | Prisma.MCCCreateOrConnectWithoutTehsilInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutTehsilInput | Prisma.MCCUpsertWithWhereUniqueWithoutTehsilInput[];
    createMany?: Prisma.MCCCreateManyTehsilInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutTehsilInput | Prisma.MCCUpdateWithWhereUniqueWithoutTehsilInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutTehsilInput | Prisma.MCCUpdateManyWithWhereWithoutTehsilInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCUncheckedUpdateManyWithoutTehsilNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutTehsilInput, Prisma.MCCUncheckedCreateWithoutTehsilInput> | Prisma.MCCCreateWithoutTehsilInput[] | Prisma.MCCUncheckedCreateWithoutTehsilInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutTehsilInput | Prisma.MCCCreateOrConnectWithoutTehsilInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutTehsilInput | Prisma.MCCUpsertWithWhereUniqueWithoutTehsilInput[];
    createMany?: Prisma.MCCCreateManyTehsilInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutTehsilInput | Prisma.MCCUpdateWithWhereUniqueWithoutTehsilInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutTehsilInput | Prisma.MCCUpdateManyWithWhereWithoutTehsilInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCCreateNestedManyWithoutVillageInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutVillageInput, Prisma.MCCUncheckedCreateWithoutVillageInput> | Prisma.MCCCreateWithoutVillageInput[] | Prisma.MCCUncheckedCreateWithoutVillageInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutVillageInput | Prisma.MCCCreateOrConnectWithoutVillageInput[];
    createMany?: Prisma.MCCCreateManyVillageInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUncheckedCreateNestedManyWithoutVillageInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutVillageInput, Prisma.MCCUncheckedCreateWithoutVillageInput> | Prisma.MCCCreateWithoutVillageInput[] | Prisma.MCCUncheckedCreateWithoutVillageInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutVillageInput | Prisma.MCCCreateOrConnectWithoutVillageInput[];
    createMany?: Prisma.MCCCreateManyVillageInputEnvelope;
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
};
export type MCCUpdateManyWithoutVillageNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutVillageInput, Prisma.MCCUncheckedCreateWithoutVillageInput> | Prisma.MCCCreateWithoutVillageInput[] | Prisma.MCCUncheckedCreateWithoutVillageInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutVillageInput | Prisma.MCCCreateOrConnectWithoutVillageInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutVillageInput | Prisma.MCCUpsertWithWhereUniqueWithoutVillageInput[];
    createMany?: Prisma.MCCCreateManyVillageInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutVillageInput | Prisma.MCCUpdateWithWhereUniqueWithoutVillageInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutVillageInput | Prisma.MCCUpdateManyWithWhereWithoutVillageInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: Prisma.XOR<Prisma.MCCCreateWithoutVillageInput, Prisma.MCCUncheckedCreateWithoutVillageInput> | Prisma.MCCCreateWithoutVillageInput[] | Prisma.MCCUncheckedCreateWithoutVillageInput[];
    connectOrCreate?: Prisma.MCCCreateOrConnectWithoutVillageInput | Prisma.MCCCreateOrConnectWithoutVillageInput[];
    upsert?: Prisma.MCCUpsertWithWhereUniqueWithoutVillageInput | Prisma.MCCUpsertWithWhereUniqueWithoutVillageInput[];
    createMany?: Prisma.MCCCreateManyVillageInputEnvelope;
    set?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    disconnect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    delete?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    connect?: Prisma.MCCWhereUniqueInput | Prisma.MCCWhereUniqueInput[];
    update?: Prisma.MCCUpdateWithWhereUniqueWithoutVillageInput | Prisma.MCCUpdateWithWhereUniqueWithoutVillageInput[];
    updateMany?: Prisma.MCCUpdateManyWithWhereWithoutVillageInput | Prisma.MCCUpdateManyWithWhereWithoutVillageInput[];
    deleteMany?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
};
export type MCCCreateWithoutDistrictInput = {
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutMccsInput;
    tehsil: Prisma.TehsilCreateNestedOneWithoutMccsInput;
    village: Prisma.VillageCreateNestedOneWithoutMccsInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutMccInput;
};
export type MCCUncheckedCreateWithoutDistrictInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutMccInput;
};
export type MCCCreateOrConnectWithoutDistrictInput = {
    where: Prisma.MCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.MCCCreateWithoutDistrictInput, Prisma.MCCUncheckedCreateWithoutDistrictInput>;
};
export type MCCCreateManyDistrictInputEnvelope = {
    data: Prisma.MCCCreateManyDistrictInput | Prisma.MCCCreateManyDistrictInput[];
    skipDuplicates?: boolean;
};
export type MCCUpsertWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.MCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.MCCUpdateWithoutDistrictInput, Prisma.MCCUncheckedUpdateWithoutDistrictInput>;
    create: Prisma.XOR<Prisma.MCCCreateWithoutDistrictInput, Prisma.MCCUncheckedCreateWithoutDistrictInput>;
};
export type MCCUpdateWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.MCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.MCCUpdateWithoutDistrictInput, Prisma.MCCUncheckedUpdateWithoutDistrictInput>;
};
export type MCCUpdateManyWithWhereWithoutDistrictInput = {
    where: Prisma.MCCScalarWhereInput;
    data: Prisma.XOR<Prisma.MCCUpdateManyMutationInput, Prisma.MCCUncheckedUpdateManyWithoutDistrictInput>;
};
export type MCCScalarWhereInput = {
    AND?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
    OR?: Prisma.MCCScalarWhereInput[];
    NOT?: Prisma.MCCScalarWhereInput | Prisma.MCCScalarWhereInput[];
    id?: Prisma.IntFilter<"MCC"> | number;
    mccName?: Prisma.StringFilter<"MCC"> | string;
    mccCode?: Prisma.StringFilter<"MCC"> | string;
    status?: Prisma.EnumStatusFilter<"MCC"> | $Enums.Status;
    stateId?: Prisma.IntFilter<"MCC"> | number;
    districtId?: Prisma.IntFilter<"MCC"> | number;
    tehsilId?: Prisma.IntFilter<"MCC"> | number;
    villageId?: Prisma.IntFilter<"MCC"> | number;
    createdAt?: Prisma.DateTimeFilter<"MCC"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MCC"> | Date | string;
};
export type MCCCreateWithoutMppsInput = {
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutMccsInput;
    district: Prisma.DistrictCreateNestedOneWithoutMccsInput;
    tehsil: Prisma.TehsilCreateNestedOneWithoutMccsInput;
    village: Prisma.VillageCreateNestedOneWithoutMccsInput;
};
export type MCCUncheckedCreateWithoutMppsInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MCCCreateOrConnectWithoutMppsInput = {
    where: Prisma.MCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.MCCCreateWithoutMppsInput, Prisma.MCCUncheckedCreateWithoutMppsInput>;
};
export type MCCUpsertWithoutMppsInput = {
    update: Prisma.XOR<Prisma.MCCUpdateWithoutMppsInput, Prisma.MCCUncheckedUpdateWithoutMppsInput>;
    create: Prisma.XOR<Prisma.MCCCreateWithoutMppsInput, Prisma.MCCUncheckedCreateWithoutMppsInput>;
    where?: Prisma.MCCWhereInput;
};
export type MCCUpdateToOneWithWhereWithoutMppsInput = {
    where?: Prisma.MCCWhereInput;
    data: Prisma.XOR<Prisma.MCCUpdateWithoutMppsInput, Prisma.MCCUncheckedUpdateWithoutMppsInput>;
};
export type MCCUpdateWithoutMppsInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutMccsNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutMccsNestedInput;
    tehsil?: Prisma.TehsilUpdateOneRequiredWithoutMccsNestedInput;
    village?: Prisma.VillageUpdateOneRequiredWithoutMccsNestedInput;
};
export type MCCUncheckedUpdateWithoutMppsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MCCCreateWithoutStateInput = {
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    district: Prisma.DistrictCreateNestedOneWithoutMccsInput;
    tehsil: Prisma.TehsilCreateNestedOneWithoutMccsInput;
    village: Prisma.VillageCreateNestedOneWithoutMccsInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutMccInput;
};
export type MCCUncheckedCreateWithoutStateInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutMccInput;
};
export type MCCCreateOrConnectWithoutStateInput = {
    where: Prisma.MCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.MCCCreateWithoutStateInput, Prisma.MCCUncheckedCreateWithoutStateInput>;
};
export type MCCCreateManyStateInputEnvelope = {
    data: Prisma.MCCCreateManyStateInput | Prisma.MCCCreateManyStateInput[];
    skipDuplicates?: boolean;
};
export type MCCUpsertWithWhereUniqueWithoutStateInput = {
    where: Prisma.MCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.MCCUpdateWithoutStateInput, Prisma.MCCUncheckedUpdateWithoutStateInput>;
    create: Prisma.XOR<Prisma.MCCCreateWithoutStateInput, Prisma.MCCUncheckedCreateWithoutStateInput>;
};
export type MCCUpdateWithWhereUniqueWithoutStateInput = {
    where: Prisma.MCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.MCCUpdateWithoutStateInput, Prisma.MCCUncheckedUpdateWithoutStateInput>;
};
export type MCCUpdateManyWithWhereWithoutStateInput = {
    where: Prisma.MCCScalarWhereInput;
    data: Prisma.XOR<Prisma.MCCUpdateManyMutationInput, Prisma.MCCUncheckedUpdateManyWithoutStateInput>;
};
export type MCCCreateWithoutTehsilInput = {
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutMccsInput;
    district: Prisma.DistrictCreateNestedOneWithoutMccsInput;
    village: Prisma.VillageCreateNestedOneWithoutMccsInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutMccInput;
};
export type MCCUncheckedCreateWithoutTehsilInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutMccInput;
};
export type MCCCreateOrConnectWithoutTehsilInput = {
    where: Prisma.MCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.MCCCreateWithoutTehsilInput, Prisma.MCCUncheckedCreateWithoutTehsilInput>;
};
export type MCCCreateManyTehsilInputEnvelope = {
    data: Prisma.MCCCreateManyTehsilInput | Prisma.MCCCreateManyTehsilInput[];
    skipDuplicates?: boolean;
};
export type MCCUpsertWithWhereUniqueWithoutTehsilInput = {
    where: Prisma.MCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.MCCUpdateWithoutTehsilInput, Prisma.MCCUncheckedUpdateWithoutTehsilInput>;
    create: Prisma.XOR<Prisma.MCCCreateWithoutTehsilInput, Prisma.MCCUncheckedCreateWithoutTehsilInput>;
};
export type MCCUpdateWithWhereUniqueWithoutTehsilInput = {
    where: Prisma.MCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.MCCUpdateWithoutTehsilInput, Prisma.MCCUncheckedUpdateWithoutTehsilInput>;
};
export type MCCUpdateManyWithWhereWithoutTehsilInput = {
    where: Prisma.MCCScalarWhereInput;
    data: Prisma.XOR<Prisma.MCCUpdateManyMutationInput, Prisma.MCCUncheckedUpdateManyWithoutTehsilInput>;
};
export type MCCCreateWithoutVillageInput = {
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutMccsInput;
    district: Prisma.DistrictCreateNestedOneWithoutMccsInput;
    tehsil: Prisma.TehsilCreateNestedOneWithoutMccsInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutMccInput;
};
export type MCCUncheckedCreateWithoutVillageInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    tehsilId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutMccInput;
};
export type MCCCreateOrConnectWithoutVillageInput = {
    where: Prisma.MCCWhereUniqueInput;
    create: Prisma.XOR<Prisma.MCCCreateWithoutVillageInput, Prisma.MCCUncheckedCreateWithoutVillageInput>;
};
export type MCCCreateManyVillageInputEnvelope = {
    data: Prisma.MCCCreateManyVillageInput | Prisma.MCCCreateManyVillageInput[];
    skipDuplicates?: boolean;
};
export type MCCUpsertWithWhereUniqueWithoutVillageInput = {
    where: Prisma.MCCWhereUniqueInput;
    update: Prisma.XOR<Prisma.MCCUpdateWithoutVillageInput, Prisma.MCCUncheckedUpdateWithoutVillageInput>;
    create: Prisma.XOR<Prisma.MCCCreateWithoutVillageInput, Prisma.MCCUncheckedCreateWithoutVillageInput>;
};
export type MCCUpdateWithWhereUniqueWithoutVillageInput = {
    where: Prisma.MCCWhereUniqueInput;
    data: Prisma.XOR<Prisma.MCCUpdateWithoutVillageInput, Prisma.MCCUncheckedUpdateWithoutVillageInput>;
};
export type MCCUpdateManyWithWhereWithoutVillageInput = {
    where: Prisma.MCCScalarWhereInput;
    data: Prisma.XOR<Prisma.MCCUpdateManyMutationInput, Prisma.MCCUncheckedUpdateManyWithoutVillageInput>;
};
export type MCCCreateManyDistrictInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MCCUpdateWithoutDistrictInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutMccsNestedInput;
    tehsil?: Prisma.TehsilUpdateOneRequiredWithoutMccsNestedInput;
    village?: Prisma.VillageUpdateOneRequiredWithoutMccsNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateWithoutDistrictInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateManyWithoutDistrictInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MCCCreateManyStateInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    districtId: number;
    tehsilId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MCCUpdateWithoutStateInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    district?: Prisma.DistrictUpdateOneRequiredWithoutMccsNestedInput;
    tehsil?: Prisma.TehsilUpdateOneRequiredWithoutMccsNestedInput;
    village?: Prisma.VillageUpdateOneRequiredWithoutMccsNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateWithoutStateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateManyWithoutStateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MCCCreateManyTehsilInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    villageId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MCCUpdateWithoutTehsilInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutMccsNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutMccsNestedInput;
    village?: Prisma.VillageUpdateOneRequiredWithoutMccsNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateWithoutTehsilInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateManyWithoutTehsilInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    villageId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MCCCreateManyVillageInput = {
    id?: number;
    mccName: string;
    mccCode: string;
    status?: $Enums.Status;
    stateId: number;
    districtId: number;
    tehsilId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MCCUpdateWithoutVillageInput = {
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutMccsNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutMccsNestedInput;
    tehsil?: Prisma.TehsilUpdateOneRequiredWithoutMccsNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateWithoutVillageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutMccNestedInput;
};
export type MCCUncheckedUpdateManyWithoutVillageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mccName?: Prisma.StringFieldUpdateOperationsInput | string;
    mccCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    districtId?: Prisma.IntFieldUpdateOperationsInput | number;
    tehsilId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MCCCountOutputType
 */
export type MCCCountOutputType = {
    mpps: number;
};
export type MCCCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mpps?: boolean | MCCCountOutputTypeCountMppsArgs;
};
/**
 * MCCCountOutputType without action
 */
export type MCCCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCCCountOutputType
     */
    select?: Prisma.MCCCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MCCCountOutputType without action
 */
export type MCCCountOutputTypeCountMppsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MPPWhereInput;
};
export type MCCSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mccName?: boolean;
    mccCode?: boolean;
    status?: boolean;
    stateId?: boolean;
    districtId?: boolean;
    tehsilId?: boolean;
    villageId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
    tehsil?: boolean | Prisma.TehsilDefaultArgs<ExtArgs>;
    village?: boolean | Prisma.VillageDefaultArgs<ExtArgs>;
    mpps?: boolean | Prisma.MCC$mppsArgs<ExtArgs>;
    _count?: boolean | Prisma.MCCCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mCC"]>;
export type MCCSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mccName?: boolean;
    mccCode?: boolean;
    status?: boolean;
    stateId?: boolean;
    districtId?: boolean;
    tehsilId?: boolean;
    villageId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
    tehsil?: boolean | Prisma.TehsilDefaultArgs<ExtArgs>;
    village?: boolean | Prisma.VillageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mCC"]>;
export type MCCSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mccName?: boolean;
    mccCode?: boolean;
    status?: boolean;
    stateId?: boolean;
    districtId?: boolean;
    tehsilId?: boolean;
    villageId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
    tehsil?: boolean | Prisma.TehsilDefaultArgs<ExtArgs>;
    village?: boolean | Prisma.VillageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mCC"]>;
export type MCCSelectScalar = {
    id?: boolean;
    mccName?: boolean;
    mccCode?: boolean;
    status?: boolean;
    stateId?: boolean;
    districtId?: boolean;
    tehsilId?: boolean;
    villageId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MCCOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mccName" | "mccCode" | "status" | "stateId" | "districtId" | "tehsilId" | "villageId" | "createdAt" | "updatedAt", ExtArgs["result"]["mCC"]>;
export type MCCInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
    tehsil?: boolean | Prisma.TehsilDefaultArgs<ExtArgs>;
    village?: boolean | Prisma.VillageDefaultArgs<ExtArgs>;
    mpps?: boolean | Prisma.MCC$mppsArgs<ExtArgs>;
    _count?: boolean | Prisma.MCCCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MCCIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
    tehsil?: boolean | Prisma.TehsilDefaultArgs<ExtArgs>;
    village?: boolean | Prisma.VillageDefaultArgs<ExtArgs>;
};
export type MCCIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
    tehsil?: boolean | Prisma.TehsilDefaultArgs<ExtArgs>;
    village?: boolean | Prisma.VillageDefaultArgs<ExtArgs>;
};
export type $MCCPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MCC";
    objects: {
        state: Prisma.$StatePayload<ExtArgs>;
        district: Prisma.$DistrictPayload<ExtArgs>;
        tehsil: Prisma.$TehsilPayload<ExtArgs>;
        village: Prisma.$VillagePayload<ExtArgs>;
        mpps: Prisma.$MPPPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        mccName: string;
        mccCode: string;
        status: $Enums.Status;
        stateId: number;
        districtId: number;
        tehsilId: number;
        villageId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mCC"]>;
    composites: {};
};
export type MCCGetPayload<S extends boolean | null | undefined | MCCDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MCCPayload, S>;
export type MCCCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MCCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MCCCountAggregateInputType | true;
};
export interface MCCDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MCC'];
        meta: {
            name: 'MCC';
        };
    };
    /**
     * Find zero or one MCC that matches the filter.
     * @param {MCCFindUniqueArgs} args - Arguments to find a MCC
     * @example
     * // Get one MCC
     * const mCC = await prisma.mCC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MCCFindUniqueArgs>(args: Prisma.SelectSubset<T, MCCFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MCC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MCCFindUniqueOrThrowArgs} args - Arguments to find a MCC
     * @example
     * // Get one MCC
     * const mCC = await prisma.mCC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MCCFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MCCFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MCC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCFindFirstArgs} args - Arguments to find a MCC
     * @example
     * // Get one MCC
     * const mCC = await prisma.mCC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MCCFindFirstArgs>(args?: Prisma.SelectSubset<T, MCCFindFirstArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MCC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCFindFirstOrThrowArgs} args - Arguments to find a MCC
     * @example
     * // Get one MCC
     * const mCC = await prisma.mCC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MCCFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MCCFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MCCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MCCS
     * const mCCS = await prisma.mCC.findMany()
     *
     * // Get first 10 MCCS
     * const mCCS = await prisma.mCC.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mCCWithIdOnly = await prisma.mCC.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MCCFindManyArgs>(args?: Prisma.SelectSubset<T, MCCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MCC.
     * @param {MCCCreateArgs} args - Arguments to create a MCC.
     * @example
     * // Create one MCC
     * const MCC = await prisma.mCC.create({
     *   data: {
     *     // ... data to create a MCC
     *   }
     * })
     *
     */
    create<T extends MCCCreateArgs>(args: Prisma.SelectSubset<T, MCCCreateArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MCCS.
     * @param {MCCCreateManyArgs} args - Arguments to create many MCCS.
     * @example
     * // Create many MCCS
     * const mCC = await prisma.mCC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MCCCreateManyArgs>(args?: Prisma.SelectSubset<T, MCCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MCCS and returns the data saved in the database.
     * @param {MCCCreateManyAndReturnArgs} args - Arguments to create many MCCS.
     * @example
     * // Create many MCCS
     * const mCC = await prisma.mCC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MCCS and only return the `id`
     * const mCCWithIdOnly = await prisma.mCC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MCCCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MCCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MCC.
     * @param {MCCDeleteArgs} args - Arguments to delete one MCC.
     * @example
     * // Delete one MCC
     * const MCC = await prisma.mCC.delete({
     *   where: {
     *     // ... filter to delete one MCC
     *   }
     * })
     *
     */
    delete<T extends MCCDeleteArgs>(args: Prisma.SelectSubset<T, MCCDeleteArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MCC.
     * @param {MCCUpdateArgs} args - Arguments to update one MCC.
     * @example
     * // Update one MCC
     * const mCC = await prisma.mCC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MCCUpdateArgs>(args: Prisma.SelectSubset<T, MCCUpdateArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MCCS.
     * @param {MCCDeleteManyArgs} args - Arguments to filter MCCS to delete.
     * @example
     * // Delete a few MCCS
     * const { count } = await prisma.mCC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MCCDeleteManyArgs>(args?: Prisma.SelectSubset<T, MCCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MCCS
     * const mCC = await prisma.mCC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MCCUpdateManyArgs>(args: Prisma.SelectSubset<T, MCCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MCCS and returns the data updated in the database.
     * @param {MCCUpdateManyAndReturnArgs} args - Arguments to update many MCCS.
     * @example
     * // Update many MCCS
     * const mCC = await prisma.mCC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MCCS and only return the `id`
     * const mCCWithIdOnly = await prisma.mCC.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MCCUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MCCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MCC.
     * @param {MCCUpsertArgs} args - Arguments to update or create a MCC.
     * @example
     * // Update or create a MCC
     * const mCC = await prisma.mCC.upsert({
     *   create: {
     *     // ... data to create a MCC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MCC we want to update
     *   }
     * })
     */
    upsert<T extends MCCUpsertArgs>(args: Prisma.SelectSubset<T, MCCUpsertArgs<ExtArgs>>): Prisma.Prisma__MCCClient<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MCCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCCountArgs} args - Arguments to filter MCCS to count.
     * @example
     * // Count the number of MCCS
     * const count = await prisma.mCC.count({
     *   where: {
     *     // ... the filter for the MCCS we want to count
     *   }
     * })
    **/
    count<T extends MCCCountArgs>(args?: Prisma.Subset<T, MCCCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MCCCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MCCAggregateArgs>(args: Prisma.Subset<T, MCCAggregateArgs>): Prisma.PrismaPromise<GetMCCAggregateType<T>>;
    /**
     * Group by MCC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCCGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MCCGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MCCGroupByArgs['orderBy'];
    } : {
        orderBy?: MCCGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MCCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMCCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MCC model
     */
    readonly fields: MCCFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MCC.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MCCClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    state<T extends Prisma.StateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StateDefaultArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    district<T extends Prisma.DistrictDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DistrictDefaultArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tehsil<T extends Prisma.TehsilDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TehsilDefaultArgs<ExtArgs>>): Prisma.Prisma__TehsilClient<runtime.Types.Result.GetResult<Prisma.$TehsilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    village<T extends Prisma.VillageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VillageDefaultArgs<ExtArgs>>): Prisma.Prisma__VillageClient<runtime.Types.Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mpps<T extends Prisma.MCC$mppsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MCC$mppsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MPPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the MCC model
 */
export interface MCCFieldRefs {
    readonly id: Prisma.FieldRef<"MCC", 'Int'>;
    readonly mccName: Prisma.FieldRef<"MCC", 'String'>;
    readonly mccCode: Prisma.FieldRef<"MCC", 'String'>;
    readonly status: Prisma.FieldRef<"MCC", 'Status'>;
    readonly stateId: Prisma.FieldRef<"MCC", 'Int'>;
    readonly districtId: Prisma.FieldRef<"MCC", 'Int'>;
    readonly tehsilId: Prisma.FieldRef<"MCC", 'Int'>;
    readonly villageId: Prisma.FieldRef<"MCC", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"MCC", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MCC", 'DateTime'>;
}
/**
 * MCC findUnique
 */
export type MCCFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * Filter, which MCC to fetch.
     */
    where: Prisma.MCCWhereUniqueInput;
};
/**
 * MCC findUniqueOrThrow
 */
export type MCCFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * Filter, which MCC to fetch.
     */
    where: Prisma.MCCWhereUniqueInput;
};
/**
 * MCC findFirst
 */
export type MCCFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * Filter, which MCC to fetch.
     */
    where?: Prisma.MCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MCCS to fetch.
     */
    orderBy?: Prisma.MCCOrderByWithRelationInput | Prisma.MCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MCCS.
     */
    cursor?: Prisma.MCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MCCS.
     */
    distinct?: Prisma.MCCScalarFieldEnum | Prisma.MCCScalarFieldEnum[];
};
/**
 * MCC findFirstOrThrow
 */
export type MCCFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * Filter, which MCC to fetch.
     */
    where?: Prisma.MCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MCCS to fetch.
     */
    orderBy?: Prisma.MCCOrderByWithRelationInput | Prisma.MCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MCCS.
     */
    cursor?: Prisma.MCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MCCS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MCCS.
     */
    distinct?: Prisma.MCCScalarFieldEnum | Prisma.MCCScalarFieldEnum[];
};
/**
 * MCC findMany
 */
export type MCCFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * Filter, which MCCS to fetch.
     */
    where?: Prisma.MCCWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MCCS to fetch.
     */
    orderBy?: Prisma.MCCOrderByWithRelationInput | Prisma.MCCOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MCCS.
     */
    cursor?: Prisma.MCCWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MCCS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MCCS.
     */
    skip?: number;
    distinct?: Prisma.MCCScalarFieldEnum | Prisma.MCCScalarFieldEnum[];
};
/**
 * MCC create
 */
export type MCCCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * The data needed to create a MCC.
     */
    data: Prisma.XOR<Prisma.MCCCreateInput, Prisma.MCCUncheckedCreateInput>;
};
/**
 * MCC createMany
 */
export type MCCCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MCCS.
     */
    data: Prisma.MCCCreateManyInput | Prisma.MCCCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MCC createManyAndReturn
 */
export type MCCCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * The data used to create many MCCS.
     */
    data: Prisma.MCCCreateManyInput | Prisma.MCCCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MCC update
 */
export type MCCUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * The data needed to update a MCC.
     */
    data: Prisma.XOR<Prisma.MCCUpdateInput, Prisma.MCCUncheckedUpdateInput>;
    /**
     * Choose, which MCC to update.
     */
    where: Prisma.MCCWhereUniqueInput;
};
/**
 * MCC updateMany
 */
export type MCCUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MCCS.
     */
    data: Prisma.XOR<Prisma.MCCUpdateManyMutationInput, Prisma.MCCUncheckedUpdateManyInput>;
    /**
     * Filter which MCCS to update
     */
    where?: Prisma.MCCWhereInput;
    /**
     * Limit how many MCCS to update.
     */
    limit?: number;
};
/**
 * MCC updateManyAndReturn
 */
export type MCCUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * The data used to update MCCS.
     */
    data: Prisma.XOR<Prisma.MCCUpdateManyMutationInput, Prisma.MCCUncheckedUpdateManyInput>;
    /**
     * Filter which MCCS to update
     */
    where?: Prisma.MCCWhereInput;
    /**
     * Limit how many MCCS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MCC upsert
 */
export type MCCUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * The filter to search for the MCC to update in case it exists.
     */
    where: Prisma.MCCWhereUniqueInput;
    /**
     * In case the MCC found by the `where` argument doesn't exist, create a new MCC with this data.
     */
    create: Prisma.XOR<Prisma.MCCCreateInput, Prisma.MCCUncheckedCreateInput>;
    /**
     * In case the MCC was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MCCUpdateInput, Prisma.MCCUncheckedUpdateInput>;
};
/**
 * MCC delete
 */
export type MCCDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
    /**
     * Filter which MCC to delete.
     */
    where: Prisma.MCCWhereUniqueInput;
};
/**
 * MCC deleteMany
 */
export type MCCDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MCCS to delete
     */
    where?: Prisma.MCCWhereInput;
    /**
     * Limit how many MCCS to delete.
     */
    limit?: number;
};
/**
 * MCC.mpps
 */
export type MCC$mppsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPP
     */
    select?: Prisma.MPPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MPP
     */
    omit?: Prisma.MPPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MPPInclude<ExtArgs> | null;
    where?: Prisma.MPPWhereInput;
    orderBy?: Prisma.MPPOrderByWithRelationInput | Prisma.MPPOrderByWithRelationInput[];
    cursor?: Prisma.MPPWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MPPScalarFieldEnum | Prisma.MPPScalarFieldEnum[];
};
/**
 * MCC without action
 */
export type MCCDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCC
     */
    select?: Prisma.MCCSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MCC
     */
    omit?: Prisma.MCCOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MCCInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MCC.d.ts.map