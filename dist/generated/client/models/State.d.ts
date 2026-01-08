import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model State
 *
 */
export type StateModel = runtime.Types.Result.DefaultSelection<Prisma.$StatePayload>;
export type AggregateState = {
    _count: StateCountAggregateOutputType | null;
    _avg: StateAvgAggregateOutputType | null;
    _sum: StateSumAggregateOutputType | null;
    _min: StateMinAggregateOutputType | null;
    _max: StateMaxAggregateOutputType | null;
};
export type StateAvgAggregateOutputType = {
    id: number | null;
};
export type StateSumAggregateOutputType = {
    id: number | null;
};
export type StateMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    status: $Enums.Status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StateMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    status: $Enums.Status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StateCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StateAvgAggregateInputType = {
    id?: true;
};
export type StateSumAggregateInputType = {
    id?: true;
};
export type StateMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StateMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StateCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: Prisma.StateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of States to fetch.
     */
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` States from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` States.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType;
};
export type GetStateAggregateType<T extends StateAggregateArgs> = {
    [P in keyof T & keyof AggregateState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateState[P]> : Prisma.GetScalarType<T[P], AggregateState[P]>;
};
export type StateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithAggregationInput | Prisma.StateOrderByWithAggregationInput[];
    by: Prisma.StateScalarFieldEnum[] | Prisma.StateScalarFieldEnum;
    having?: Prisma.StateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StateCountAggregateInputType | true;
    _avg?: StateAvgAggregateInputType;
    _sum?: StateSumAggregateInputType;
    _min?: StateMinAggregateInputType;
    _max?: StateMaxAggregateInputType;
};
export type StateGroupByOutputType = {
    id: number;
    name: string;
    code: string | null;
    status: $Enums.Status;
    createdAt: Date;
    updatedAt: Date;
    _count: StateCountAggregateOutputType | null;
    _avg: StateAvgAggregateOutputType | null;
    _sum: StateSumAggregateOutputType | null;
    _min: StateMinAggregateOutputType | null;
    _max: StateMaxAggregateOutputType | null;
};
type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StateGroupByOutputType[P]>;
}>>;
export type StateWhereInput = {
    AND?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    OR?: Prisma.StateWhereInput[];
    NOT?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    id?: Prisma.IntFilter<"State"> | number;
    name?: Prisma.StringFilter<"State"> | string;
    code?: Prisma.StringNullableFilter<"State"> | string | null;
    status?: Prisma.EnumStatusFilter<"State"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    districts?: Prisma.DistrictListRelationFilter;
    mpps?: Prisma.MPPListRelationFilter;
    mccs?: Prisma.MCCListRelationFilter;
};
export type StateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    districts?: Prisma.DistrictOrderByRelationAggregateInput;
    mpps?: Prisma.MPPOrderByRelationAggregateInput;
    mccs?: Prisma.MCCOrderByRelationAggregateInput;
};
export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    OR?: Prisma.StateWhereInput[];
    NOT?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    code?: Prisma.StringNullableFilter<"State"> | string | null;
    status?: Prisma.EnumStatusFilter<"State"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    districts?: Prisma.DistrictListRelationFilter;
    mpps?: Prisma.MPPListRelationFilter;
    mccs?: Prisma.MCCListRelationFilter;
}, "id" | "name">;
export type StateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StateCountOrderByAggregateInput;
    _avg?: Prisma.StateAvgOrderByAggregateInput;
    _max?: Prisma.StateMaxOrderByAggregateInput;
    _min?: Prisma.StateMinOrderByAggregateInput;
    _sum?: Prisma.StateSumOrderByAggregateInput;
};
export type StateScalarWhereWithAggregatesInput = {
    AND?: Prisma.StateScalarWhereWithAggregatesInput | Prisma.StateScalarWhereWithAggregatesInput[];
    OR?: Prisma.StateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StateScalarWhereWithAggregatesInput | Prisma.StateScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"State"> | number;
    name?: Prisma.StringWithAggregatesFilter<"State"> | string;
    code?: Prisma.StringNullableWithAggregatesFilter<"State"> | string | null;
    status?: Prisma.EnumStatusWithAggregatesFilter<"State"> | $Enums.Status;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"State"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"State"> | Date | string;
};
export type StateCreateInput = {
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    districts?: Prisma.DistrictCreateNestedManyWithoutStateInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutStateInput;
    mccs?: Prisma.MCCCreateNestedManyWithoutStateInput;
};
export type StateUncheckedCreateInput = {
    id?: number;
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutStateInput;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutStateInput;
    mccs?: Prisma.MCCUncheckedCreateNestedManyWithoutStateInput;
};
export type StateUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    districts?: Prisma.DistrictUpdateManyWithoutStateNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutStateNestedInput;
    mccs?: Prisma.MCCUpdateManyWithoutStateNestedInput;
};
export type StateUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutStateNestedInput;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutStateNestedInput;
    mccs?: Prisma.MCCUncheckedUpdateManyWithoutStateNestedInput;
};
export type StateCreateManyInput = {
    id?: number;
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StateUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateScalarRelationFilter = {
    is?: Prisma.StateWhereInput;
    isNot?: Prisma.StateWhereInput;
};
export type StateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StateAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StateSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StateCreateNestedOneWithoutDistrictsInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutDistrictsInput, Prisma.StateUncheckedCreateWithoutDistrictsInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutDistrictsInput;
    connect?: Prisma.StateWhereUniqueInput;
};
export type StateUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutDistrictsInput, Prisma.StateUncheckedCreateWithoutDistrictsInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutDistrictsInput;
    upsert?: Prisma.StateUpsertWithoutDistrictsInput;
    connect?: Prisma.StateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StateUpdateToOneWithWhereWithoutDistrictsInput, Prisma.StateUpdateWithoutDistrictsInput>, Prisma.StateUncheckedUpdateWithoutDistrictsInput>;
};
export type StateCreateNestedOneWithoutMccsInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutMccsInput, Prisma.StateUncheckedCreateWithoutMccsInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutMccsInput;
    connect?: Prisma.StateWhereUniqueInput;
};
export type StateUpdateOneRequiredWithoutMccsNestedInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutMccsInput, Prisma.StateUncheckedCreateWithoutMccsInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutMccsInput;
    upsert?: Prisma.StateUpsertWithoutMccsInput;
    connect?: Prisma.StateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StateUpdateToOneWithWhereWithoutMccsInput, Prisma.StateUpdateWithoutMccsInput>, Prisma.StateUncheckedUpdateWithoutMccsInput>;
};
export type StateCreateNestedOneWithoutMppsInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutMppsInput, Prisma.StateUncheckedCreateWithoutMppsInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutMppsInput;
    connect?: Prisma.StateWhereUniqueInput;
};
export type StateUpdateOneRequiredWithoutMppsNestedInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutMppsInput, Prisma.StateUncheckedCreateWithoutMppsInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutMppsInput;
    upsert?: Prisma.StateUpsertWithoutMppsInput;
    connect?: Prisma.StateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StateUpdateToOneWithWhereWithoutMppsInput, Prisma.StateUpdateWithoutMppsInput>, Prisma.StateUncheckedUpdateWithoutMppsInput>;
};
export type StateCreateWithoutDistrictsInput = {
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPCreateNestedManyWithoutStateInput;
    mccs?: Prisma.MCCCreateNestedManyWithoutStateInput;
};
export type StateUncheckedCreateWithoutDistrictsInput = {
    id?: number;
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutStateInput;
    mccs?: Prisma.MCCUncheckedCreateNestedManyWithoutStateInput;
};
export type StateCreateOrConnectWithoutDistrictsInput = {
    where: Prisma.StateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StateCreateWithoutDistrictsInput, Prisma.StateUncheckedCreateWithoutDistrictsInput>;
};
export type StateUpsertWithoutDistrictsInput = {
    update: Prisma.XOR<Prisma.StateUpdateWithoutDistrictsInput, Prisma.StateUncheckedUpdateWithoutDistrictsInput>;
    create: Prisma.XOR<Prisma.StateCreateWithoutDistrictsInput, Prisma.StateUncheckedCreateWithoutDistrictsInput>;
    where?: Prisma.StateWhereInput;
};
export type StateUpdateToOneWithWhereWithoutDistrictsInput = {
    where?: Prisma.StateWhereInput;
    data: Prisma.XOR<Prisma.StateUpdateWithoutDistrictsInput, Prisma.StateUncheckedUpdateWithoutDistrictsInput>;
};
export type StateUpdateWithoutDistrictsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUpdateManyWithoutStateNestedInput;
    mccs?: Prisma.MCCUpdateManyWithoutStateNestedInput;
};
export type StateUncheckedUpdateWithoutDistrictsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutStateNestedInput;
    mccs?: Prisma.MCCUncheckedUpdateManyWithoutStateNestedInput;
};
export type StateCreateWithoutMccsInput = {
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    districts?: Prisma.DistrictCreateNestedManyWithoutStateInput;
    mpps?: Prisma.MPPCreateNestedManyWithoutStateInput;
};
export type StateUncheckedCreateWithoutMccsInput = {
    id?: number;
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutStateInput;
    mpps?: Prisma.MPPUncheckedCreateNestedManyWithoutStateInput;
};
export type StateCreateOrConnectWithoutMccsInput = {
    where: Prisma.StateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StateCreateWithoutMccsInput, Prisma.StateUncheckedCreateWithoutMccsInput>;
};
export type StateUpsertWithoutMccsInput = {
    update: Prisma.XOR<Prisma.StateUpdateWithoutMccsInput, Prisma.StateUncheckedUpdateWithoutMccsInput>;
    create: Prisma.XOR<Prisma.StateCreateWithoutMccsInput, Prisma.StateUncheckedCreateWithoutMccsInput>;
    where?: Prisma.StateWhereInput;
};
export type StateUpdateToOneWithWhereWithoutMccsInput = {
    where?: Prisma.StateWhereInput;
    data: Prisma.XOR<Prisma.StateUpdateWithoutMccsInput, Prisma.StateUncheckedUpdateWithoutMccsInput>;
};
export type StateUpdateWithoutMccsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    districts?: Prisma.DistrictUpdateManyWithoutStateNestedInput;
    mpps?: Prisma.MPPUpdateManyWithoutStateNestedInput;
};
export type StateUncheckedUpdateWithoutMccsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutStateNestedInput;
    mpps?: Prisma.MPPUncheckedUpdateManyWithoutStateNestedInput;
};
export type StateCreateWithoutMppsInput = {
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    districts?: Prisma.DistrictCreateNestedManyWithoutStateInput;
    mccs?: Prisma.MCCCreateNestedManyWithoutStateInput;
};
export type StateUncheckedCreateWithoutMppsInput = {
    id?: number;
    name: string;
    code?: string | null;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutStateInput;
    mccs?: Prisma.MCCUncheckedCreateNestedManyWithoutStateInput;
};
export type StateCreateOrConnectWithoutMppsInput = {
    where: Prisma.StateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StateCreateWithoutMppsInput, Prisma.StateUncheckedCreateWithoutMppsInput>;
};
export type StateUpsertWithoutMppsInput = {
    update: Prisma.XOR<Prisma.StateUpdateWithoutMppsInput, Prisma.StateUncheckedUpdateWithoutMppsInput>;
    create: Prisma.XOR<Prisma.StateCreateWithoutMppsInput, Prisma.StateUncheckedCreateWithoutMppsInput>;
    where?: Prisma.StateWhereInput;
};
export type StateUpdateToOneWithWhereWithoutMppsInput = {
    where?: Prisma.StateWhereInput;
    data: Prisma.XOR<Prisma.StateUpdateWithoutMppsInput, Prisma.StateUncheckedUpdateWithoutMppsInput>;
};
export type StateUpdateWithoutMppsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    districts?: Prisma.DistrictUpdateManyWithoutStateNestedInput;
    mccs?: Prisma.MCCUpdateManyWithoutStateNestedInput;
};
export type StateUncheckedUpdateWithoutMppsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutStateNestedInput;
    mccs?: Prisma.MCCUncheckedUpdateManyWithoutStateNestedInput;
};
/**
 * Count Type StateCountOutputType
 */
export type StateCountOutputType = {
    districts: number;
    mpps: number;
    mccs: number;
};
export type StateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    districts?: boolean | StateCountOutputTypeCountDistrictsArgs;
    mpps?: boolean | StateCountOutputTypeCountMppsArgs;
    mccs?: boolean | StateCountOutputTypeCountMccsArgs;
};
/**
 * StateCountOutputType without action
 */
export type StateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: Prisma.StateCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StateCountOutputType without action
 */
export type StateCountOutputTypeCountDistrictsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DistrictWhereInput;
};
/**
 * StateCountOutputType without action
 */
export type StateCountOutputTypeCountMppsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MPPWhereInput;
};
/**
 * StateCountOutputType without action
 */
export type StateCountOutputTypeCountMccsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MCCWhereInput;
};
export type StateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    districts?: boolean | Prisma.State$districtsArgs<ExtArgs>;
    mpps?: boolean | Prisma.State$mppsArgs<ExtArgs>;
    mccs?: boolean | Prisma.State$mccsArgs<ExtArgs>;
    _count?: boolean | Prisma.StateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["state"]>;
export type StateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["state"]>;
export type StateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["state"]>;
export type StateSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["state"]>;
export type StateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    districts?: boolean | Prisma.State$districtsArgs<ExtArgs>;
    mpps?: boolean | Prisma.State$mppsArgs<ExtArgs>;
    mccs?: boolean | Prisma.State$mccsArgs<ExtArgs>;
    _count?: boolean | Prisma.StateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "State";
    objects: {
        districts: Prisma.$DistrictPayload<ExtArgs>[];
        mpps: Prisma.$MPPPayload<ExtArgs>[];
        mccs: Prisma.$MCCPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        code: string | null;
        status: $Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["state"]>;
    composites: {};
};
export type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatePayload, S>;
export type StateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StateCountAggregateInputType | true;
};
export interface StateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['State'];
        meta: {
            name: 'State';
        };
    };
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: Prisma.SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: Prisma.SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     *
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StateFindManyArgs>(args?: Prisma.SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     *
     */
    create<T extends StateCreateArgs>(args: Prisma.SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StateCreateManyArgs>(args?: Prisma.SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     *
     */
    delete<T extends StateDeleteArgs>(args: Prisma.SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StateUpdateArgs>(args: Prisma.SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: Prisma.SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StateUpdateManyArgs>(args: Prisma.SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
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
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: Prisma.SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(args?: Prisma.Subset<T, StateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StateCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Prisma.Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>;
    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StateGroupByArgs['orderBy'];
    } : {
        orderBy?: StateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the State model
     */
    readonly fields: StateFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for State.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    districts<T extends Prisma.State$districtsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.State$districtsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mpps<T extends Prisma.State$mppsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.State$mppsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MPPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mccs<T extends Prisma.State$mccsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.State$mccsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MCCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the State model
 */
export interface StateFieldRefs {
    readonly id: Prisma.FieldRef<"State", 'Int'>;
    readonly name: Prisma.FieldRef<"State", 'String'>;
    readonly code: Prisma.FieldRef<"State", 'String'>;
    readonly status: Prisma.FieldRef<"State", 'Status'>;
    readonly createdAt: Prisma.FieldRef<"State", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"State", 'DateTime'>;
}
/**
 * State findUnique
 */
export type StateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * Filter, which State to fetch.
     */
    where: Prisma.StateWhereUniqueInput;
};
/**
 * State findUniqueOrThrow
 */
export type StateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * Filter, which State to fetch.
     */
    where: Prisma.StateWhereUniqueInput;
};
/**
 * State findFirst
 */
export type StateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * Filter, which State to fetch.
     */
    where?: Prisma.StateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of States to fetch.
     */
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for States.
     */
    cursor?: Prisma.StateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` States from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` States.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of States.
     */
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
/**
 * State findFirstOrThrow
 */
export type StateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * Filter, which State to fetch.
     */
    where?: Prisma.StateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of States to fetch.
     */
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for States.
     */
    cursor?: Prisma.StateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` States from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` States.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of States.
     */
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
/**
 * State findMany
 */
export type StateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * Filter, which States to fetch.
     */
    where?: Prisma.StateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of States to fetch.
     */
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing States.
     */
    cursor?: Prisma.StateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` States from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` States.
     */
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
/**
 * State create
 */
export type StateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * The data needed to create a State.
     */
    data: Prisma.XOR<Prisma.StateCreateInput, Prisma.StateUncheckedCreateInput>;
};
/**
 * State createMany
 */
export type StateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: Prisma.StateCreateManyInput | Prisma.StateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * State createManyAndReturn
 */
export type StateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * The data used to create many States.
     */
    data: Prisma.StateCreateManyInput | Prisma.StateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * State update
 */
export type StateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * The data needed to update a State.
     */
    data: Prisma.XOR<Prisma.StateUpdateInput, Prisma.StateUncheckedUpdateInput>;
    /**
     * Choose, which State to update.
     */
    where: Prisma.StateWhereUniqueInput;
};
/**
 * State updateMany
 */
export type StateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: Prisma.XOR<Prisma.StateUpdateManyMutationInput, Prisma.StateUncheckedUpdateManyInput>;
    /**
     * Filter which States to update
     */
    where?: Prisma.StateWhereInput;
    /**
     * Limit how many States to update.
     */
    limit?: number;
};
/**
 * State updateManyAndReturn
 */
export type StateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * The data used to update States.
     */
    data: Prisma.XOR<Prisma.StateUpdateManyMutationInput, Prisma.StateUncheckedUpdateManyInput>;
    /**
     * Filter which States to update
     */
    where?: Prisma.StateWhereInput;
    /**
     * Limit how many States to update.
     */
    limit?: number;
};
/**
 * State upsert
 */
export type StateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: Prisma.StateWhereUniqueInput;
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: Prisma.XOR<Prisma.StateCreateInput, Prisma.StateUncheckedCreateInput>;
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StateUpdateInput, Prisma.StateUncheckedUpdateInput>;
};
/**
 * State delete
 */
export type StateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
    /**
     * Filter which State to delete.
     */
    where: Prisma.StateWhereUniqueInput;
};
/**
 * State deleteMany
 */
export type StateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: Prisma.StateWhereInput;
    /**
     * Limit how many States to delete.
     */
    limit?: number;
};
/**
 * State.districts
 */
export type State$districtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the District
     */
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where?: Prisma.DistrictWhereInput;
    orderBy?: Prisma.DistrictOrderByWithRelationInput | Prisma.DistrictOrderByWithRelationInput[];
    cursor?: Prisma.DistrictWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DistrictScalarFieldEnum | Prisma.DistrictScalarFieldEnum[];
};
/**
 * State.mpps
 */
export type State$mppsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * State.mccs
 */
export type State$mccsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MCCWhereInput;
    orderBy?: Prisma.MCCOrderByWithRelationInput | Prisma.MCCOrderByWithRelationInput[];
    cursor?: Prisma.MCCWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MCCScalarFieldEnum | Prisma.MCCScalarFieldEnum[];
};
/**
 * State without action
 */
export type StateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: Prisma.StateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the State
     */
    omit?: Prisma.StateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StateInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=State.d.ts.map