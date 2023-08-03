/**
 * interface representing the BaseEntity data object providing an ID and optionally optLock/eTag value
 *
 * @export
 * @interface BaseEntity
 */
export interface BaseEntity {
    id: string;
    optLock?: number;
}
