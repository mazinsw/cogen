import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { useFocus } from "@/components/focus";
import { DateField } from "@/components/ui/date-field";
import { PictureInput } from "@/components/ui/picture-input";
import { NumberInput } from "@/components/ui/number-input";
import { InputGroup } from "@/components/ui/input-group";
import { CloseButton } from "@/components/ui/close-button";
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
import { I$[Reference.norm] } from "@/store/slices/$[reference.style]/types";
$[reference.end]
$[field.end]
$[field.each(enum)]
$[field.if(boolean)]
$[field.else]
import { $[fIeld.norm]ToCaption } from "@/utils/$[table.style]";
$[field.end]
$[field.end]
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
import { $[Reference.style]Picker } from "@/components/$[reference.style]/$[reference.style]-picker";
$[reference.end]
$[field.end]
import { $[Table.style]ManagerContext } from "@/contexts/$[table.style]-manager-context";
import { t } from "@/i18n";
import { NativeSelect, Flex, FlexProps, Input, SegmentGroup, FileUpload } from "@chakra-ui/react";
import { KeyboardEvent, useContext, useEffect, useState, useMemo } from "react";
import { MdOutlineWallet } from "react-icons/md";
import { LuFileUp } from "react-icons/lu";
import { I$[Table.norm]$[field.each(enum)]$[field.if(boolean)]$[field.else], $[Table.norm]$[Field.norm]$[field.end]$[field.end] } from "@/store/slices/$[table.style]/types";
$[table.exists(array|enum)]
import {enum, array} from 'utils';
$[table.else]
import * as utils from 'utils';
$[table.end]

interface $[Table.style]FormProps extends FlexProps {
  onNext?: () => void;
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
  onNew$[Reference.style]?: () => void;
$[reference.end]
$[field.end]
}

export function $[Table.style]Form({
  onNext,
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
  onNew$[Reference.style],
$[reference.end]
$[field.end]
  ...props
}: $[Table.style]FormProps) {
  const { original, changes, isSaving, invalidFields, setField, setChanges } =
    useContext($[Table.style]ManagerContext);
$[field.each(all)]
$[field.if(primary|image|repeated)]
$[field.else.if(reference)]
$[reference.finds(uuid)]
$[reference.else]
  const [$[fIeld.noid]Touched, set$[Field.noid]Touched] = useState(invalidFields.has("$[field]"));
$[reference.end]
$[field.else.if(integer|bigint|float|double|currency)]
  const [$[fIeld.norm]Ref, set$[Field.norm]Focus] = useFocus(false);
  const [$[fIeld.norm]Touched, set$[Field.norm]Touched] = useState(invalidFields.has("$[field]"));
$[field.else.if(date|time|datetime)]
$[field.match(.*abertura|.*adicao|.*inicio|.*evento|.*registro|.*cadastro|.*criacao.*|.*lancamento|.*envio|.*atualizacao|.*extincao|.*remocao|.*arquivad.*)]$[field.else]
  const [$[fIeld.norm]Ref, set$[Field.norm]Focus] = useFocus(false);
  const [$[fIeld.norm]Touched, set$[Field.norm]Touched] = useState(invalidFields.has("$[field]"));
$[field.end]
$[field.else.if(enum)]
  const [$[fIeld.norm]Touched, set$[Field.norm]Touched] = useState(invalidFields.has("$[field]"));
$[field.else.if(string)]
  const [$[fIeld.norm]Ref, set$[Field.norm]Focus] = useFocus(false);
  const [$[fIeld.norm]Touched, set$[Field.norm]Touched] = useState(invalidFields.has("$[field]"));
$[field.end]
$[field.end]

$[field.each(all)]
$[field.if(image|repeated)]
$[field.else.if(reference)]
$[reference.finds(uuid)]
$[reference.else]
  const $[fIeld.noid] = changes.$[field.noid] !== undefined ? changes.$[field.noid] : original?.$[field.noid];
$[reference.end]
$[field.else.if(boolean|enum)]
  const $[fIeld.norm] = changes.$[field] !== undefined ? changes.$[field] : original?.$[field];
$[field.else.if(string)]
  const $[fIeld.norm] = changes.$[field] !== undefined ? changes.$[field] || "" : original?.$[field] || "";
  const is$[Field.norm]Valid = $[fIeld.norm].length >= 2;
$[field.end]
$[field.end]

$[field.each(enum)]
$[field.if(boolean|repeated)]
$[field.else]
  const $[fIeld.norm]Options = useMemo(() => Object.values($[Table.norm]$[Field.norm]).map((value) => ({
    label: $[fIeld.norm]ToCaption(value),
    value,
  })), []);
$[field.end]
$[field.end]
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]

  const set$[Reference.style] = ($[field.noid]: I$[Reference.norm] | null) => {
    setChanges({ ...changes, $[field.noid], $[field]: $[field.noid]?.id });
    set$[Field.noid]Touched(!$[field.noid]);
  };
$[reference.end]
$[field.end]

  const handleNextDone = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }
$[field.each(all)]
$[field.if(primary|reference|image|repeated)]
$[field.else.if(date|time|datetime)]
$[field.match(.*abertura|.*adicao|.*inicio|.*evento|.*registro|.*cadastro|.*criacao.*|.*lancamento|.*envio|.*atualizacao|.*extincao|.*remocao|.*arquivad.*)]$[field.else]
    if (event.target === $[fIeld.norm]Ref.current) {
      set$[Field.norm]Focus();
      return;
    }
$[field.end]
$[field.else.if(integer|bigint|float|double|currency|string)]
    if (event.target === $[fIeld.norm]Ref.current) {
      set$[Field.norm]Focus();
      return;
    }
$[field.end]
$[field.end]
    onNext?.();
  };

  useEffect(() => {
$[field.each(all)]
$[field.if(primary|image|repeated)]
$[field.else.if(reference)]
$[reference.finds(uuid)]
$[reference.else]
    set$[Field.noid]Touched(invalidFields.has("$[field]"));
$[reference.end]
$[field.else.if(string|enum|integer|bigint|float|double|currency)]
    set$[Field.norm]Touched(invalidFields.has("$[field]"));
$[field.end]
$[field.end]
  }, [invalidFields]);

  return (
    <Flex flexDir="column" gap="4" {...props}>
      <Flex gap={["4", "2"]} w="100%" flexDir={["column", "row"]}>
$[field.each(all)]
$[field.if(primary|repeated)]
$[field.else.if(reference)]
$[reference.finds(uuid)]
$[reference.else]
        <$[Reference.style]Picker
$[field.if(optional)]
          allowRemoval
$[field.end]
          value={$[field.noid]}
          invalid={$[fIeld.noid]Touched}
          errorText={t("choose_$[reference.style]")}
          onNew={onNew$[Reference.style]}
          onValueChange={set$[Reference.style]}
          maxW="300px"
        />
$[reference.end]
$[field.else.if(integer|bigint|float|double|currency)]
        <Field
          minW="150px"
          label={t("$[field]")}
          invalid={$[fIeld.norm]Touched}
          errorText={t("enter_$[field]")}
        >
          <NumberInput
            min={0}
            ref={$[fIeld.norm]Ref}
            original={original?.$[field]}
$[field.if(integer|bigint)]
            decimalPlaces={0}
$[field.end]
$[field.if(currency)]
            currencySymbol="R$ "
$[field.end]
            onValueChange={(value) => {
              setField("$[field]", value);
              set$[Field.norm]Touched(typeof value !== 'number');
            }}
            onKeyDown={handleNextDone}
          />
        </Field>
$[field.else.if(date|time|datetime)]
$[field.match(.*abertura|.*adicao|.*inicio|.*evento|.*registro|.*cadastro|.*criacao.*|.*lancamento|.*envio|.*atualizacao|.*extincao|.*remocao|.*arquivad.*)]$[field.else]
        <DateField
          minW="180px"
          ref={$[fIeld.norm]Ref}
          label={t("$[fIeld.norm]_date")}
          invalid={$[fIeld.norm]Touched}
          errorText={t("enter_$[field]")}
          original={original?.$[field]}
          onValueChange={(value) => {
            setField("$[field]", value$[field.if(null)] || null$[field.end]);
            set$[Field.norm]Touched(!value);
          }}
          onKeyDown={handleNextDone}
        />
$[field.end]
$[field.else.if(boolean)]
        <Checkbox
          mt="6"
          whiteSpace="nowrap"
          checked={$[fIeld.norm] || false}
          onCheckedChange={(details) =>
            setField("$[field]", details.checked === true)
          }
        >
          {t("$[field]_a")}
        </Checkbox>
$[field.else.if(enum)]
        <Field
          label={t("$[field]")}
          w="100%"
          invalid={!$[fIeld.norm] && $[fIeld.norm]Touched}
          errorText={t("choose_$[field]")}
        >
$[field.if(few_fields)]
          <SegmentGroup.Root
            value={$[fIeld.norm] || ""}
            onValueChange={(e) => setField("$[field]", e.value as $[Table.norm]$[Field.norm])}
          >
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={$[fIeld.norm]Options} />
          </SegmentGroup.Root>
$[field.else]
          <NativeSelect.Root size="md" fontSize="md">
            <NativeSelect.Field
              placeholder={t("select_$[field]")}
              value={$[fIeld.norm] || ""}
              onChange={(e) => setField("$[field]", e.target.value as $[Table.norm]$[Field.norm])}
            >
              {$[fIeld.norm]Options.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
$[field.end]
        </Field>
$[field.else.if(image)]
$[field.match(image.*|icon.*|foto.*|avatar.*|capa.*|banner.*)]
        <PictureInput
          boxSize="64px"
          alignSelf="center"
          originalUrl={original?.$[field]}
          loading={isSaving}
          icon={MdOutlineWallet}
          onUrlChange={(url) => setField("$[field]", url)}
          onFileChange={(file) => setField("$[field.replace(_url,_file)]", file)}
        />
$[field.else]
        <FileUpload.Root
          gap="1"
          onFileChange={(e) => setField("$[field.replace(_url,_file)]", e.acceptedFiles[0])}
          maxFileSize={10 * 1024 * 1024}
          maxFiles={1}
        >
          <FileUpload.HiddenInput />
          <FileUpload.Label>{t("$[field.replace(_url)]")}</FileUpload.Label>
          <InputGroup
            w="100%"
            startElement={<LuFileUp size="16px" />}
            endElement={
              <FileUpload.ClearTrigger asChild>
                <CloseButton
                  me="-1"
                  size="xs"
                  variant="plain"
                  focusVisibleRing="inside"
                  focusRingWidth="2px"
                  pointerEvents="auto"
                />
              </FileUpload.ClearTrigger>
            }
          >
            <Input asChild>
              <FileUpload.Trigger>
                <FileUpload.FileText
                  lineClamp={1}
                  fallback={t("choose_file_to_send")}
                />
              </FileUpload.Trigger>
            </Input>
          </InputGroup>
        </FileUpload.Root>
$[field.end]
$[field.else.if(string)]
        <Field
          w="100%"
          ref={$[fIeld.norm]Ref}
          label={t("$[field]")}
          invalid={!is$[Field.norm]Valid && $[fIeld.norm]Touched}
          errorText={t("field_short", { field: t("$[field]"), count: 2 })}
        >
          <Input
            placeholder={t("$[field]_placeholder")}
            disabled={isSaving}
            value={$[fIeld.norm]}
            fontSize="md"
            maxLength={100}
            onChange={(event) => {
              set$[Field.norm]Touched(
                !!event.target.value && event.target.value.length < 2
              );
              setField("$[field]", event.target.value$[field.if(null)] || null$[field.end]);
            }}
            onKeyDown={handleNextDone}
          />
        </Field>
$[field.end]
$[field.end]
      </Flex>
    </Flex>
  );
}
