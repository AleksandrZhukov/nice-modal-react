/**
 * @module NiceModal
 * */
import React from 'react';
export interface NiceModalState {
    id: string;
    args?: Record<string, unknown>;
    visible?: boolean;
    delayVisible?: boolean;
    keepMounted?: boolean;
}
export interface NiceModalStore {
    [key: string]: NiceModalState;
}
export interface NiceModalAction {
    type: string;
    payload: {
        modalId: string;
        args?: Record<string, unknown>;
        flags?: Record<string, unknown>;
    };
}
/**
 * The handler to manage a modal returned by {@link useModal | useModal} hook.
 */
export interface NiceModalHandler<Props = Record<string, unknown>> extends NiceModalState {
    /**
     * Whether a modal is visible, it's controlled by {@link NiceModalHandler.show | show}/{@link NiceModalHandler.hide | hide} method.
     */
    visible: boolean;
    /**
     * If you don't want to remove the modal from the tree after hide when using helpers, set it to true.
     */
    keepMounted: boolean;
    /**
     * Show the modal, it will change {@link NiceModalHandler.visible | visible} state to true.
     * @param args - an object passed to modal component as props.
     */
    show: (args?: Props) => Promise<unknown>;
    /**
     * Hide the modal, it will change {@link NiceModalHandler.visible | visible} state to false.
     */
    hide: () => Promise<unknown>;
    /**
     * Resolve the promise returned by {@link NiceModalHandler.show | show} method.
     */
    resolve: (args?: unknown) => void;
    /**
     * Reject the promise returned by {@link NiceModalHandler.show | show} method.
     */
    reject: (args?: unknown) => void;
    /**
     * Remove the modal component from React component tree. It improves performance compared to just making a modal invisible.
     */
    remove: () => void;
    /**
     * Resolve the promise returned by {@link NiceModalHandler.hide | hide} method.
     */
    resolveHide: (args?: unknown) => void;
}
export interface NiceModalHocProps {
    id: string;
    defaultVisible?: boolean;
    keepMounted?: boolean;
}
export declare const reducer: (state: NiceModalStore | undefined, action: NiceModalAction) => NiceModalStore;
/** omit id and partial all required props */
declare type NiceModalArgs<T> = T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> ? Omit<React.ComponentProps<T>, 'id'> : Record<string, unknown>;
export declare function show<T extends string>(modal: T, args?: Record<string, unknown>): Promise<unknown>;
export declare function show<T extends React.FC<any>>(modal: T, args?: NiceModalArgs<T>): Promise<unknown>;
export declare function hide<T>(modal: string | React.FC<any>): Promise<T>;
export declare const remove: (modalId: string) => void;
export declare function useModal(): NiceModalHandler;
export declare function useModal<T extends string>(modal: T, args?: Record<string, unknown>): NiceModalHandler;
export declare function useModal<T extends React.FC<any>>(modal: T, args?: NiceModalArgs<T>): NiceModalHandler<NiceModalArgs<T>>;
export declare const create: <P extends {}>(Comp: React.ComponentType<P>) => React.FC<P & NiceModalHocProps>;
export declare const register: <T extends React.FC<any>>(id: string, comp: T, props?: NiceModalArgs<T> | undefined) => void;
/**
 * Unregister a modal.
 * @param id - The id of the modal.
 */
export declare const unregister: (id: string) => void;
export declare const Provider: React.FC<Record<string, unknown>>;
/**
 * Declarative way to register a modal.
 * @param id - The id of the modal.
 * @param component - The modal Component.
 * @returns
 */
export declare const ModalDef: React.FC<Record<string, unknown>>;
export declare const antdModal: (modal: NiceModalHandler) => {
    visible: boolean;
    onCancel: () => void;
    onOk: () => void;
    afterClose: () => void;
};
export declare const antdDrawer: (modal: NiceModalHandler) => {
    visible: boolean;
    onClose: () => void;
    afterVisibleChange: (visible: boolean) => void;
};
export declare const muiDialog: (modal: NiceModalHandler) => {
    open: boolean;
    onClose: () => void;
    onExited: () => void;
};
export declare const bootstrapDialog: (modal: NiceModalHandler) => {
    show: boolean;
    onHide: () => void;
    onExited: () => void;
};
declare const _default: {
    Provider: React.FC<Record<string, unknown>>;
    ModalDef: React.FC<Record<string, unknown>>;
    NiceModalContext: React.Context<NiceModalStore>;
    create: <P extends {}>(Comp: React.ComponentType<P>) => React.FC<P & NiceModalHocProps>;
    register: <T extends React.FC<any>>(id: string, comp: T, props?: NiceModalArgs<T> | undefined) => void;
    show: typeof show;
    hide: typeof hide;
    remove: (modalId: string) => void;
    useModal: typeof useModal;
    reducer: (state: NiceModalStore | undefined, action: NiceModalAction) => NiceModalStore;
    antdModal: (modal: NiceModalHandler<Record<string, unknown>>) => {
        visible: boolean;
        onCancel: () => void;
        onOk: () => void;
        afterClose: () => void;
    };
    antdDrawer: (modal: NiceModalHandler<Record<string, unknown>>) => {
        visible: boolean;
        onClose: () => void;
        afterVisibleChange: (visible: boolean) => void;
    };
    muiDialog: (modal: NiceModalHandler<Record<string, unknown>>) => {
        open: boolean;
        onClose: () => void;
        onExited: () => void;
    };
    bootstrapDialog: (modal: NiceModalHandler<Record<string, unknown>>) => {
        show: boolean;
        onHide: () => void;
        onExited: () => void;
    };
};
export default _default;